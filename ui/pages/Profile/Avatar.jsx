import { useEffect } from "react";
import { VerifiedBadge } from "../../icons";
import { EditButton } from "./";
import { isStorageReadable } from "../../../utils/Firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { NO_AVATAR } from "../../../configs/Constants";

export default function Avatar(props) {
  const { user, isEdit, setIsEdit, avatar, setAvatar } = props;

  useEffect(() => {
    if (user !== null) {
      let avtr = user?.userData?.avatar;

      if(avtr === NO_AVATAR) setAvatar(NO_AVATAR);

      else {
        let isFirebaseReadable = isStorageReadable(avtr);

        if(isFirebaseReadable) {
          const file = `users/${avtr}`;
          const unextracted = ref(Storage, file);

          const url = getDownloadURL(unextracted);
          setAvatar(url || NO_AVATAR);
        }

        else setAvatar(avtr);
      }
    }
  }, [user]);

  return (
    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
      <img
        src={avatar === null ? NO_AVATAR : avatar}
        alt="Profile Picture"
        loading="lazy"
        onError={() => setAvatar(NO_AVATAR)}
        className={`h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 z-10 ${avatar === null ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}`}
      />
      
      <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
        <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-gray-900 truncate flex items-center">
            {user?.userData?.name} {user?.userData?.surname}
            {user?.userAdditionalData?.isUserVerified && <VerifiedBadge className="ml-1" />}
          </h1>
          
          <p className="text-gray-500">@{user?.userData?.username}</p>
        </div>

        <EditButton isEdit={isEdit} setIsEdit={setIsEdit} id={user?._id} />
      </div>
    </div>
  );
}