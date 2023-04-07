import Link from "next/link";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { ANON_AVATAR, NO_AVATAR } from "../../../configs/Constants";
import { VerifiedBadge } from "../../icons";

export default function Poster({ productData }) {
  const { user } = productData;
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user !== null) {
      let avtr = productData?.user?.avatar;

      if (avtr !== undefined) {
        if (avtr.isFirebase) {
          const file = `users/${avtr}`;
          const unextracted = ref(Storage, file);

          const url = getDownloadURL(unextracted);
          setAvatar(url);
        } 
        
        else {
          if (avtr.url === "") setAvatar(NO_AVATAR);
          else setAvatar(avtr.url);
        }
      } 
      
      else setAvatar(NO_AVATAR);
    }
  }, [productData]);

  const canUseLink = () => !productData?.postedAnonymously ? { cursor: "pointer" } : {pointerEvents: "none", PointerEvent: 'none', cursor: "default"};
  
  return (
    <div style={canUseLink()} >
      <span className="text-gray-900 text-[14.5px] font-medium flex justify-start items-start">
      Dhënësi:
      </span>
      
      <Link href={productData?.postedAnonymously ? '/' : `/profili/${user?.userData?.username}`}>
        <a className="transition-all w-auto mt-1.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-lg">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full mr-3">
            <img
              alt="User Profile Picture"
              className="w-10 h-10 rounded-full"
              src={productData?.postedAnonymously ? ANON_AVATAR : avatar}
              onError={() => productData?.postedAnonymously ? null : setAvatar(NO_AVATAR)}
            />
          </div>
          
          {!productData.postedAnonymously && (
            <div className="w-full">
              <p className="text-[15.5px] flex items-center">
                {`${user?.userData?.name} ${user?.userData?.surname}`}
                {user?.userAdditionalData?.isUserVerified && <VerifiedBadge className="h-4 w-4 ml-1" />}
              </p>
              <span className="text-[13px] font-normal text-gray-500">@{user?.userData?.username}</span>
            </div>
          )}

          {productData.postedAnonymously && (
            <div>
              <p className="text-[15px]">Dhurues Anonim</p>
            </div>
          )}
        </a>
      </Link>
    </div>
  );
}
