import { useEffect, useState } from "react"
import { getDownloadURL, ref } from "firebase/storage"
import { EditIcon } from "../../icons"
import { isStorageReadable } from "../../../utils/Firebase"
import { NO_AVATAR } from "../../../configs/Constants"

export default function Avatar({ user, tempAvatar, setTempAvatar }) {
  const [avatar, setAvatar] = useState(user?.userData?.avatar || NO_AVATAR)

  const onUploadHelper = () => {
    const fileInput = document.getElementById("avatar-file-input")
    fileInput.click()
  }

  const onUploadFile = (e) => {
    const file = e.target.files[0]
    if(file) setTempAvatar(file)
  }

  useEffect(() => {
    if (user !== null) {
      let avtr = user?.userData?.avatar

      if(avtr === NO_AVATAR) setAvatar(NO_AVATAR)

      else {
        let isFirebaseReadable = isStorageReadable(avtr)

        if(isFirebaseReadable) {
          const file = `users/${avtr}`
          const unextracted = ref(Storage, file)

          const url = getDownloadURL(unextracted)
          setAvatar(url || NO_AVATAR)
        }

        else setAvatar(avtr)
      }
    }
  }, [user])

  const PreviewImage = tempAvatar !== null ? URL.createObjectURL(tempAvatar) : avatar

  return (
    <div className="w-full mt-[-40px] z-50 flex justify-center">
        <div className="mt-1 flex items-center relative bg-gray-50 rounded-full">
          <img
            className="h-15 w-15 min-h-15 max-h-15 min-w-15 max-w-15 rounded-full ring-4 ring-white sm:h-24 sm:w-24 sm:h-min-24 sm:h-max-24 sm:min-w-24 sm:max-w-24 object-cover"
            src={PreviewImage}
            onDragStart={(e) => e.preventDefault()}
            onError={() => setAvatar(NO_AVATAR)}
            loading="lazy"
            width="100"
          />

          <button onClick={onUploadHelper} className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 inline-flex justify-center p-2 border border-gray-300 shadow-sm text-sm font-medium rounded-[100%] text-gray-700 bg-white hover:bg-gray-50 outline-none focus:outline-none transition-all duration-500">
              <EditIcon className="h-4 w-4 text-gray-400" />
          </button>

          <div onClick={onUploadHelper} className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-stretch sm:flex-row sm:space-y-0 sm:space-x-4 cursor-pointer">            
            <input 
              type="file" 
              value={null}
              id="avatar-file-input"
              onChange={onUploadFile} 
              accept="image/png, image/jpeg"
              className="w-full h-full absolute cursor-pointer invisible"
            />
          </div>
        </div>
    </div>
  )
}