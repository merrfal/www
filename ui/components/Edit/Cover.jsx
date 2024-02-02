import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { UploadFileToFirebase } from "../../../utils"
import { EditIcon } from "../../icons"
import { Translation } from "../../../utils/Translations"
import { NO_COVER } from "../../../configs/Constants"

export default function Cover({ user }) {
  const dispatch = useDispatch()

  const [cover, setCover] = useState(user?.userData?.cover || NO_COVER)
  const [temporalCover, setTemporalCover] = useState(user?.userData?.cover || NO_COVER)

  const onUploadHelper = () => {
    const fileInput = document.getElementById("cover-file-input")
    fileInput.click()
  }

  const onUploadFile = (e) => {
    const file = e.target.files[0]

    if(file) {
      setCover(URL.createObjectURL(file))
      UploadFileToFirebase(file, 'users', dispatch)
    }
  }

  useEffect(() => {
    if (user !== null) {
      let covr = user?.userData?.cover

      if(covr === NO_COVER) setCover(NO_COVER)

      else {
        let isFirebaseReadable = isStorageReadable(covr)

        if(isFirebaseReadable) {
          const file = `users/${covr}`
          const unextracted = ref(Storage, file)

          const url = getDownloadURL(unextracted)
          setCover(url || NO_COVER)
        }

        else setCover(covr)
      }
    }
  }, [user])

  return (
    <div className="relative">
      <img 
        loading="lazy" 
        className="h-32 rounded-xl w-full object-cover lg:h-64" 
        src={cover} 
        onDragStart={(e) => e.preventDefault()}
      />

      <div onClick={onUploadHelper} className="absolute top-2 right-2 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
        <input 
          type="file" 
          value={undefined}
          id="cover-file-input"
          onChange={onUploadFile} 
          accept="image/png, image/jpeg"
          className="w-full h-full absolute cursor-pointer invisible"
        />

        {/* <button className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-all">
          <EditIcon />
          <span>{Translation("change-cover")}</span>
        </button> */}
      </div>
    </div>
  )
}