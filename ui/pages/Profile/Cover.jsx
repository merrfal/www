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
    <img
      src={cover}
      loading="lazy"
      onDragStart={(e) => e.preventDefault()}
      onError={() => setCover(NO_COVER)}
      className={`h-68 w-full object-cover max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:h-80 lg:h-84 ${cover === null ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}`}
    />
  )
}