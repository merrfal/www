import { useState } from "react";
import { UploadFileToFirebase } from "../../../utils";
import { NO_COVER } from "../../../configs/Constants";
import { useDispatch } from "react-redux";

// import { EditIcon } from "../../icons";
// import { Translation } from "../../../utils/Translations";
 // const [temporalCover, setTemporalCover] = useState(user?.userData?.cover || NO_COVER);

  // useEffect(() => {
  //   if (user !== null) {
  //     let avtr = user?.userData?.avatar;

  //     if(avtr === NO_AVATAR) setAvatar(NO_AVATAR);

  //     else {
  //       let isFirebaseReadable = isStorageReadable(avtr);

  //       if(isFirebaseReadable) {
  //         const file = `users/${avtr}`;
  //         const unextracted = ref(Storage, file);

  //         const url = getDownloadURL(unextracted);
  //         setAvatar(url || NO_AVATAR);
  //       }

  //       else setAvatar(avtr);
  //     }
  //   }
  // }, [user]);

export default function Cover({ user }) {
  const dispatch = useDispatch();
  const [cover, setCover] = useState(user?.userData?.cover || NO_COVER);


  const onUploadHelper = () => {
    const fileInput = document.getElementById("cover-file-input");
    fileInput.click();
  }

  const onUploadFile = (e) => {
    const file = e.target.files[0];

    if(file) {
      setCover(URL.createObjectURL(file))
      UploadFileToFirebase(file, 'users', dispatch);
    }
  }

  return (
    <div className="relative">
      <img loading="lazy" className="h-32 rounded-xl w-full object-cover lg:h-64" src={cover} />

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
  );
}