import { useEffect, useState } from "react";
import { EditIcon } from "../../icons";
import { isStorageReadable } from "../../../utils/Firebase";
import { UploadFileToFirebase } from "../../../utils";

import { NO_AVATAR } from "../../../configs/Constants";

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

  const onUploadHelper = () => {
    const fileInput = document.getElementById("avatar-file-input");
    fileInput.click();
  }

  const onUploadFile = async (e)  => {
    const file = e.target.files[0];

    if(file) {
      setAvatar(URL.createObjectURL(file))

      const firebaseResponse = await UploadFileToFirebase(file, 'users');

      if(firebaseResponse.success){
        const { data } = firebaseResponse;

        setUser({
          ...user,
          userData: {
            ...user.userData,
            avatar: data,
          }
        });
      }
    }
  }

  return (
    <div className="col-span-12 sm:col-span-6 mt-[-40px] z-50 flex justify-center">
        <div className="mt-1 flex items-center relative">
          <img
            className="h-15 w-15 rounded-full ring-4 ring-white sm:h-24 sm:w-24 object-cover"
            src={avatar}
            loading="lazy"
            width="100"
          />

          <div onClick={onUploadHelper} className="absolute bottom-[-1em] right-[30%] flex flex-col justify-stretch sm:flex-row sm:space-y-0 sm:space-x-4 cursor-pointer">
            <input 
              type="file" 
              value={null}
              id="avatar-file-input"
              onChange={onUploadFile} 
              accept="image/png, image/jpeg"
              className="w-full h-full absolute cursor-pointer invisible"
            />

            <button className="inline-flex justify-center p-2 border border-gray-300 shadow-sm text-sm font-medium rounded-[100%] text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-all">
              <EditIcon className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>
    </div>
  );
}
