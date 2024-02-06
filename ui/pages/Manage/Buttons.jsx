import { uploadBytesResumable, ref, getDownloadURL, deleteObject } from "firebase/storage"
import { GoogleAuthProvider, getAdditionalUserInfo, signInWithPopup } from "firebase/auth"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { v4 } from "uuid"
import { Create, Update } from "../../../api/Product"
import { Storage } from "../../../configs/Firebase"
import { Notification } from "../../../utils/Response"
import { Translation } from "../../../utils/Translations"
import { Auth as AuthInstance } from "../../../configs/Firebase"
import { Login, Register } from "../../../api/User"
import { LogoutAccount } from "../../../controllers/Redux"

import {
  AddressValidation,
  CategoryValidation,
  CityValidation,
  CountryValidation,
  DescriptionValidation,
  ImagesValidation,
  ModeValidation,
  NameValidation,
  PhoneValidation,
  SlugBuilder,
} from "../../../utils/Forms"

export default function Buttons(props) {
  const { 
    product, 
    account, 
    setValidation, 
    mode, 
    onUpdate, 
    setIsHold,
    originalImageList,
    loadingImage
  } = props

  const dispatch = useDispatch()
  const router = useRouter()

  const onValidation = () => {
    setValidation({
      name: true,
      description: true,
      address: true,
      phone: true,
      city: true,
      category: true,
      country: true,
      gallery: true,
      postedAnonymously: true,
    })

    let validations = true

    const name = NameValidation(product.productData.name)
    const description = DescriptionValidation(product.productData.description)
    const address = AddressValidation(product.productData.address)
    const phone = PhoneValidation(product.productData.phone)
    const city = CityValidation(product.productData.city)
    const category = CategoryValidation(product.productData.category)
    const country = CountryValidation(product.productData.country)
    const images = ImagesValidation(product.productData.gallery)
    const mode = ModeValidation(product.productData.postedAnonymously)

    if (name.error) validations = false
    if (description.error) validations = false
    if (address.error) validations = false
    if (phone.error) validations = false
    if (images.error) validations = false
    if (city.error) validations = false
    if (category.error) validations = false
    if (country.error) validations = false
    if (mode.error) validations = false

    return validations
  }

  const Auth = async () => {
    if(account.Loading) return
    
    try {
      var Provider = new GoogleAuthProvider()
      const data = await signInWithPopup(AuthInstance, Provider)

      if (data) {
        const user = data.user
        const { isNewUser } = getAdditionalUserInfo(data)

        if (isNewUser) Register(user, dispatch)
        else Login(user.uid, dispatch)
      } 
      
      else {
        const alert = {
          dispatch,
          message: Translation("user-auth-error"),
          type: "error",
        }

        dispatch(LogoutAccount())
        Notification(alert)
      }
    } 
    
    catch (error) {
      const alert = {
        dispatch,
        message: Translation("user-auth-error"),
        type: "error",
      }

      dispatch(LogoutAccount())
      Notification(alert)
    }
  }

  const handlePublish = async () => {
    if (!onValidation()) {
      typeof window !== "undefined" &&
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })

      return
    }

    if(!account.Auth) Auth()

    else {
      setIsHold(true)

      const gallery = []

      const compressAndUpload = (file, image, id, quality, maxWidth = 720, maxHeight = 720) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
      
          reader.onload = (event) => {
            const img = new Image();
      
            img.src = event.target.result;
            img.onload = () => {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
      
              let width = img.width;
              let height = img.height;
      
              if (width > height) {
                if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
                }
              } 
              
              else {
                if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
                }
              }
      
              canvas.width = width;
              canvas.height = height;
      
              ctx.drawImage(img, 0, 0, width, height);
      
              canvas.toBlob(
                async (blob) => {
                  if (blob.size / 1024 > 1000 && quality > 0) {
                    const newQuality = quality - 0.1;
                    compressAndUpload(file, image, id, newQuality).then(resolve).catch(reject);
                  } 
                  
                  else {
                    const compressedImageRef = ref(Storage, `products/${id}`);
                    const uploadTask = uploadBytesResumable(compressedImageRef, blob);
      
                    uploadTask
                      .then(async (snapshot) => {
                        const url = await getDownloadURL(snapshot.ref);
                        const compressedImg = {
                          url,
                          id,
                          isMain: image.isMain || false,
                          filename: `${file.name.split('.')[0]}.webp`,
                        };
      
                        resolve(compressedImg);
                      })

                      .catch((error) => {
                        reject(error);
                      });
                  }
                },
                'image/webp',
                quality
              );
            };
          };
          reader.readAsDataURL(file);
        });
      }
      
      const promises = []

      for (let index = 0; index < product.productData.gallery.length; index++) {
          const image = product.productData.gallery[index]
          const id = v4()

          promises.push(
              (async () => {
                  try {
                      const compressedImg = await compressAndUpload(image.file, image, id, .9, 720, 720)
                      gallery.push(compressedImg)
                  } 
                  
                  catch (error) {
                      const alert = {
                          type: 'error',
                          message: Translation('couldnt-upload-to-firebase'),
                          dispatch,
                      }

                      Notification(alert)
                  }
              })()
          )
      }

      await Promise.all(promises)

      const initalProduct = {
        ...product.productData,
        user: account.User._id,
        gallery,
      }

      Create(
        initalProduct, 
        router, 
        setIsHold, 
        dispatch
      )
    }
  }

  const handleUpdate = async () => {
    if (!onValidation()) {
      typeof window !== "undefined" &&
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })

      return
    }

    if(!account.Auth) Auth()

    else {
      setIsHold(true)

      const gallery = []

      const filesThatAreDeleted = originalImageList.filter((image) => {
        return !product.productData.gallery.find((file) => file.id === image.id)
      })

      const deletions = filesThatAreDeleted?.map(async (image) => {
        try {
          const parts = image?.data_url?.split('/')
          const encodedId = parts[parts.length - 1].split('?')[0]
          const id = decodeURIComponent(encodedId)
          
          if (id) {
            const cover_object = ref(Storage, id)
            await deleteObject(cover_object)
          }
        }
    
        catch(error) {}
      })
  
      await Promise.all(deletions)
  
      const compressAndUpload = (file, image, id, quality, maxWidth = 720, maxHeight = 720) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
      
          reader.onload = (event) => {
            const img = new Image();
      
            img.src = event.target.result;
            img.onload = () => {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
      
              let width = img.width;
              let height = img.height;
      
              if (width > height) {
                if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
                }
              } 
              
              else {
                if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
                }
              }
      
              canvas.width = width;
              canvas.height = height;
      
              ctx.drawImage(img, 0, 0, width, height);
      
              canvas.toBlob(
                async (blob) => {
                  if (blob.size / 1024 > 1000 && quality > 0) {
                    const newQuality = quality - 0.1;
                    compressAndUpload(file, image, id, newQuality).then(resolve).catch(reject);
                  } 
                  
                  else {
                    const compressedImageRef = ref(Storage, `products/${id}`);
                    const uploadTask = uploadBytesResumable(compressedImageRef, blob);
      
                    uploadTask
                      .then(async (snapshot) => {
                        const url = await getDownloadURL(snapshot.ref);
                        const compressedImg = {
                          url,
                          id,
                          isMain: image.isMain || false,
                          filename: `${file.name.split('.')[0]}.webp`,
                        };
      
                        resolve(compressedImg);
                      })

                      .catch((error) => {
                        reject(error);
                      });
                  }
                },
                'image/webp',
                quality
              );
            };
          };
          reader.readAsDataURL(file);
        });
      }
      
      const promises = product.productData.gallery.map(async (image, index) => {
        if (image?.isSaved) {
          const original = originalImageList.find((file) => file.id === image.id)

          gallery.push({
            ...original.original,
            isMain: image.isMain
          })
        }

        else {
          const id = v4()

          try {
            const compressedImg = await compressAndUpload(image.file, image, id, .9, 720, 720)
            gallery.push(compressedImg)
          } 
          
          catch (error) {
            const alert = {
              type: 'error',
              message: Translation('couldnt-upload-to-firebase'),
              dispatch,
            }
        
            Notification(alert)
          }
        }
      })
      
      await Promise.all(promises)

      Update(
        {
          ...product.productData,
          gallery,
        }, 
        router, 
        setIsHold, 
        dispatch
      )
    }
  }

  const handleDelete = () => onUpdate(
    product?.productData?.name, 
    product?.productData?.slug,
    product?.productData?.gallery,
  )

  return (
    <div className="text-right mb-2 mr-2" style={loadingImage ? { opacity: '.75', pointerEvents: 'none' } : {}}>
      {
        mode === "edit" && 
          <button onClick={handleDelete} className="inline-flex mt-8 justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none mr-2 outline-none text-[#dc2828] bg-[#dc282824] hover:bg-[#dc282835] transition-all">
            {Translation("delete-product")}
          </button>
      }

      {
        mode === "edit" &&
          <button onClick={handleUpdate} className="inline-flex mt-8 justify-center rounded-md border border-transparent bg-[#377DFF] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#3073ee] focus:outline-none transition-all">
            {Translation("update-product")}
          </button>
      }

      {
        mode === "create" &&
          <button onClick={handlePublish} className="inline-flex mt-8 justify-center rounded-md border border-transparent bg-[#377DFF] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#3073ee] focus:outline-none transition-all">
            {Translation("post-product")}
          </button>
      }
    </div>
  )
}