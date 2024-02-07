import { ref, deleteObject } from "firebase/storage"
import { LogoutAccount, SetAccount } from "../controllers/Slices"
import { Notification } from "../utils/Response"
import { Request } from "../utils/Http"
import { UserObject } from "../utils/DataBuilder"
import { Translation } from "../utils/Translations"
import { UploadFileToFirebase } from "../utils/Firebase"
import { Storage } from "../configs/Firebase"

export const Login = async (uid, dispatch) => {
  try {
    const req = await Request("USERS/LOGIN", { uid })
    const res = await req.json()

    if (res.success === true) dispatch(SetAccount(res.data))
    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      }

      dispatch(LogoutAccount())
      Notification(alert)
    }
  } 
  
  catch (error) {
    dispatch(LogoutAccount())

    Notification({
      dispatch,
      message: Translation("user-auth-error"),
      type: "error",
    })
  }
}

export const Register = async (initalUser, dispatch) => {
  try {
    const user = UserObject(initalUser)

    const req = await Request("USERS/CREATE", { userData: user })
    const res = await req.json()

    if (res.success === true) dispatch(SetAccount(res.data))
    
    else Notification({
      dispatch,
      message: res.message,
      type: "error",
    })
  } 
  
  catch (error) {
    Notification({
      dispatch,
      message: Translation("user-auth-error"),
      type: "error",
    })
  }
}

const CompressAvatar = async (file, dispatch) => {
  return await new Promise((resolve) => {
    const img = new Image()

    img.src = URL.createObjectURL(file)
    img.onload = () => {
        if (file.size > (50 * 1024 * 1024)) { 
            const alert = {
                type: 'error',
                message: Translation('avatar-size-can-not-be-more-than-50mb'),
                dispatch,
            }
        
            Notification(alert)
            resolve(false)
        }

        else {
            const canvas = document.createElement('canvas')

            if(img.width > 3000) {
              canvas.width = img.width / 4
              canvas.height = img.height / 4
            }

            else if(img.width > 2000) {
              canvas.width = img.width / 3
              canvas.height = img.height / 3
            }

            else if(img.width > 1000) {
              canvas.width = img.width / 2
              canvas.height = img.height / 2
            }

            else {
              canvas.width = img.width
              canvas.height = img.height
            }

            const ctx = canvas.getContext('2d')

            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height)
                            
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
            const pixels = imageData.data

            let isTransparent = false
                                
            for (let i = 0; i < pixels.length; i += 4) {
                if (pixels[i + 3] === 0) {
                    isTransparent = true
                    break
                }
            }

            if (isTransparent) {
                const alert = {
                    type: 'error',
                    message: Translation('avatar-can-not-be-transparent'),
                    dispatch,
                }
            
                Notification(alert)
                resolve(false)
            }

            else {
              canvas.toBlob((blob) => {
                const newFile = new File([blob], file.name, { type: blob.type })
                resolve(newFile)
              }, 'image/jpeg', 0.7)
            }
        }
    }
  })
}

const CompressCover = async (file, dispatch) => {
  return await new Promise((resolve) => {
    const img = new Image()

    img.src = URL.createObjectURL(file)
    img.onload = () => {
        if (file.size > (50 * 1024 * 1024)) { 
            const alert = {
                type: 'error',
                message: Translation('cover-size-can-not-be-more-than-50mb'),
                dispatch,
            }
        
            Notification(alert)
            resolve(false)
        }

        else {
            const canvas = document.createElement('canvas')

            if (img.width > 3000) {
              canvas.width = img.width / 4
              canvas.height = img.height / 4
            }

            else if (img.width > 2000) {
              canvas.width = img.width / 3
              canvas.height = img.height / 3
            }

            else {
              canvas.width = img.width / 2
              canvas.height = img.height / 2
            }

            const ctx = canvas.getContext('2d')

            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height)
                            
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
            const pixels = imageData.data

            let isTransparent = false
                                
            for (let i = 0; i < pixels.length; i += 4) {
                if (pixels[i + 3] === 0) {
                    isTransparent = true
                    break
                }
            }

            if (isTransparent) {
                const alert = {
                    type: 'error',
                    message: Translation('cover-can-not-be-transparent'),
                    dispatch,
                }
            
                Notification(alert)
                resolve(false)
            }

            else {
              canvas.toBlob((blob) => {
                const newFile = new File([blob], file.name, { type: blob.type })
                resolve(newFile)
              }, 'image/jpeg', 0.7)
            }
        }
    }
  })
}

export const Update = async (
  user,
  userClone,
  setUser,
  setIsLoading,
  setIsEdit,
  setUserClone,
  router,
  tempAvatar,
  tempCover,
  setTempAvatar,
  setTempCover,
  setShowLoading,
  dispatch
) => {
  try {
    setIsLoading(true)

    if (tempAvatar !== null || tempCover !== null) setShowLoading(true)

    const avatar = tempAvatar === null ? null : await CompressAvatar(tempAvatar, dispatch)
    const cover = tempCover === null ? null : await CompressCover(tempCover, dispatch)

    if (avatar === false || cover === false) {
      setShowLoading(false)
      setIsLoading(false)
      return
    }

    else {
      const usr = {
        old_username: user.userData.username,
        userData: {
          ...user.userData,
          ...userClone.userData,
        },
        userAdditionalData: {
          ...user.userAdditionalData,
          ...userClone.userAdditionalData
        },
      }
  
      if (avatar !== null) {
        setShowLoading(true)
  
        const { success: successAvatar, data: dataAvatar } = await UploadFileToFirebase(avatar, 'users', dispatch)
        
        if (successAvatar) {
          try {
            const parts = user?.userData?.avatar?.split('/');
            const encodedId = parts[parts.length - 1].split('?')[0];
            const id = decodeURIComponent(encodedId);
            
            if (id) {
              const cover_object = ref(Storage, id)
              await deleteObject(cover_object)
            }
          }
    
          catch(error) {}
  
          usr.userData.avatar = dataAvatar
        }
      }
  
      if (cover !== null) {
        setShowLoading(true)
  
        const { success: successCover, data: dataCover } = await UploadFileToFirebase(cover, 'covers', dispatch)
        
        if (successCover) {
          try {
            const parts = user?.userData?.cover?.split('/');
            const encodedId = parts[parts.length - 1].split('?')[0];
            const id = decodeURIComponent(encodedId);
  
            if (id) {
              const cover_object = ref(Storage, id)
              await deleteObject(cover_object)
            }
          }
    
          catch(error) {}
  
          usr.userData.cover = dataCover
        }
      }
  
      const req = await Request("USERS/UPDATE", usr)
      const res = await req.json()
  
      if (res.success === true) {
        const { data } = res
  
        const alert = {
          dispatch,
          message: res.message,
          type: "success",
        }
  
        Notification(alert)
        
        if(user.userData.username !== data.userData.username) {
          router.push(
            `/profili/${data.userData.username}`, 
            undefined, 
            { shallow: true }
          )
        }
  
        setTempAvatar(null)
        setTempCover(null)
        setUser(data)
        dispatch(SetAccount(data))
        setUserClone(data)
  
        setShowLoading(false)
        setIsEdit(false)
      } 
      
      else {
        const alert = {
          dispatch,
          message: res.message,
          type: "error",
        }
  
        Notification(alert)
      }
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Translation("user-update-error"),
      type: "error",
    }

    Notification(alert)
  } 
  
  finally {
    setShowLoading(false)
    setIsLoading(false)
  }
}

export const View = async (username, setUser, dispatch) => {
  try {
    const req = await Request("USERS/VIEW", { username })
    const res = await req.json()

    if (res.success === true) setUser(res.data)
    else setUser(false)
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Translation("user-view-error"),
      type: "error",
    }

    Notification(alert)
  }
}

export const Products = async (filters, products, setProducts, dispatch) => {
  try {
    const req = await Request("USERS/PRODUCTS", { ...filters })
    const res = await req.json()

    if (res.success === true) {
      const { data } = res

      const next = {
        products: [...products.products, ...data.products],
        hasMore: data.hasMore,
      }

      setProducts(next)
    } 
    
    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      }

      Notification(alert)
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Translation("products-list-user-error"),
      type: "error",
    }

    Notification(alert)
  }
}

export const CheckIfExist = async (field, value, dispatch) => {
  try {
    const req = await Request("USERS/EXISTS", { field, value })
    const res = await req.json()

    if (res.success === true) {
      const { data } = res
      return data
    }

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      }

      Notification(alert)
    }
  }

  catch (error){
    const alert = {
      dispatch,
      message: "",
      type: "error",
    }

    Notification(alert)
  }
}