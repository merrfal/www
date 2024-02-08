import { useEffect } from "react"
import { isStorageReadable } from "../../../utils/Firebase"
import { getDownloadURL, ref } from "firebase/storage"
import { NO_COVER } from "../../../configs/Constants"

export default function Cover({ cover, setCover, user }) {
  useEffect(() => {
    if (user !== null) {
      let cvr = user?.userData?.cover

      if(cvr === NO_COVER) setCover(NO_COVER)

      else {
        let isFirebaseReadable = isStorageReadable(cvr)

        if(isFirebaseReadable) {
          const file = `covers/${cvr}`
          const unextracted = ref(Storage, file)

          const url = getDownloadURL(unextracted)
          setCover(url || NO_COVER)
        }

        else setCover(cvr)
      }
    }
  }, [user])

  return (
    <div className="sm:px-6 lg:px-8 sm:h-52 relative lg:h-72 h-52 w-full max-w-7xl mx-auto px-4">
      <img
        src={cover}
        loading="lazy"
        onDragStart={(e) => e.preventDefault()}
        onError={() => setCover(NO_COVER)}
        className={`w-full h-full object-cover absolute top-0 right-0 left-0 bottom-0 ${cover === null ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}`}
      />

      <div className="bg-[#00000025] absolute w-full h-full top-0 right-0 left-0 bottom-0" />
    </div>
  )
}