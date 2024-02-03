import Link from "next/link"

import { getDownloadURL, ref } from "firebase/storage"
import { useEffect, useState } from "react"
import { NO_AVATAR } from "../../../configs/Constants"
import { LocationIcon, VerifiedBadge } from "../../icons"
import { Translation } from "../../../utils/Translations"
import { isStorageReadable } from "../../../utils/Firebase"
import { CityIdToName } from "../../../utils/Locations"

export default function Poster({ productData }) {
  const { user } = productData
  const { address, city } = productData

  const [avatar, setAvatar] = useState(null)
  
  const cloneAddress = address?.charAt(0).toUpperCase() + address?.slice(1) || ""
  const cloneCity = CityIdToName(city)

  useEffect(() => {
    if (user !== null) {
      let avtr = productData?.user?.userData?.avatar

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
  }, [productData])

  const canUseLink = () => !productData?.postedAnonymously ? { cursor: "pointer" } : { pointerEvents: "none", PointerEvent: 'none', cursor: "default" }
  
  return (
    <div style={canUseLink()} >
      <span className="text-gray-900 text-[14.5px] font-medium flex justify-start items-start">
        {Translation("donor")}
      </span>
      
      <Link href={productData?.postedAnonymously ? `/` : `/profili/${user?.userData?.username}`}>
        <div className="w-auto mt-1.5 text-gray-600 hover:opacity-90 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all">
          <img 
            onDragStart={(e) => e.preventDefault()}
            alt={user?.name} 
            onError={() => setAvatar(NO_AVATAR)}
            src={productData?.postedAnonymously ? NO_AVATAR : avatar}
            className="w-[40px] h-[40px] max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] rounded-full mr-4"
            loading="lazy"
          />
              
            <div className="w-full">
                {!productData.postedAnonymously && (
                  <p className="text-[15.5px] flex items-center">
                    {`${user?.userData?.name} ${user?.userData?.surname}`}
                    {user?.userAdditionalData?.isUserVerified && <VerifiedBadge className="h-4 w-4 ml-1" />}
                  </p>
                )}
                
                {productData.postedAnonymously && (
                  <p className="text-[15.5px] flex items-center">
                    {Translation("anonymous-donor")}  
                  </p>
                )}

                <span className="text-[13px] font-normal text-gray-500 flex items-center">
                  <LocationIcon className="mr-1 -ml-[3.5px] h-4 w-4 flex-shrink-0 text-gray-400" /> {`${cloneAddress}, ${cloneCity}`}
                </span>
            </div>
          </div>
      </Link>
    </div>
  )
}