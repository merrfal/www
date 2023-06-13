import ReactImageUploading from "react-images-uploading";

import { useEffect, useState } from "react";
import { EditIcon, PenIcon } from "../../icons";
import { NO_AVATAR } from "../../../configs/Constants";
import { isStorageReadable } from "../../../utils/Firebase";

export default function Avatar({ user, setUser, validations }) {
  const [avatar, setAvatar] = useState("");

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
    <div className="col-span-12 sm:col-span-6 mt-[-40px] z-50 flex justify-center">
      <ReactImageUploading
        maxNumber={69}
        dataURLKey="data_url"
        acceptType={["jpg", "png"]}
      >
        {({ onImageUpdate, onImageRemove }) => (
          <div key={0} className="mt-1 flex items-center relative">
            <img
              className="h-15 w-15 rounded-full ring-4 ring-white sm:h-24 sm:w-24"
              src={avatar}
              loading="lazy"
              width="100"
            />

            {/* <div className="absolute bottom-[-1em] right-[30%] flex flex-col justify-stretch sm:flex-row sm:space-y-0 sm:space-x-4">
              <button className="inline-flex justify-center p-2 border border-gray-300 shadow-sm text-sm font-medium rounded-[100%] text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-all">
                <EditIcon className="h-4 w-4 text-gray-400" />
              </button>
            </div> */}
          </div>
        )}
      </ReactImageUploading>
    </div>
  );
}
