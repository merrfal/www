import { useState, useEffect } from "react"
import { EditIcon } from "../../icons"
import { Translation } from "../../../utils/Translations"
import { isStorageReadable } from "../../../utils/Firebase"
import { NO_COVER } from "../../../configs/Constants"

export default function Cover({ user, tempCover, setTempCover }) {
  const [cover, setCover] = useState(user?.userData?.cover || NO_COVER)

  const onUploadHelper = () => {
    const fileInput = document.getElementById("cover-file-input")
    fileInput.click()
  }

  const onUploadFile = (e) => {
    const file = e.target.files[0]
    if(file) setTempCover(file)
  }

  useEffect(() => {
    if (user !== null) {
      let covr = user?.userData?.cover

      if(covr === NO_COVER) setCover(NO_COVER)

      else {
        let isFirebaseReadable = isStorageReadable(covr)

        if(isFirebaseReadable) {
          const file = `covers/${covr}`
          const unextracted = ref(Storage, file)

          const url = getDownloadURL(unextracted)
          setCover(url || NO_COVER)
        }

        else setCover(covr)
      }
    }
  }, [user])

  const PreviewImage = tempCover !== null ? URL.createObjectURL(tempCover) : cover

  return (
    <div className="relative bg-gray-50 border-gray-100 rounded-xl">
      <img 
        loading="lazy" 
        className="h-52 min-h-52 max-h-52 rounded-xl w-full object-cover lg:h-64 lg:max-h-52 lg:min-h-52" 
        src={PreviewImage} 
        onError={() => setCover(NO_COVER)}
        onDragStart={(e) => e.preventDefault()}
      />

      <div onClick={onUploadHelper} className="absolute top-2 right-2 flex flex-col justify-stretch">
        <input 
          type="file" 
          value={undefined}
          id="cover-file-input"
          onChange={onUploadFile} 
          accept="image/png, image/jpeg"
          className="w-full h-full absolute cursor-pointer invisible"
        />

        <button className="inline-flex ring-0 items-center justify-center px-3 py-1.5 border text-gray-500 border-gray-300 shadow-sm text-xs font-medium rounded-md bg-white hover:bg-gray-50 outline-none transition-all cursor-pointer duration-500">
          <EditIcon />

          <span>
            {Translation("change-cover")}
          </span>
        </button>
      </div>
    </div>
  )
}