import { ConfigBuilder, Notifier } from "../../utils";
import { storage } from "../../config/Firebase";
import { v4 } from "uuid";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const UserUpdate = async (
  dispatch,
  profile,
  image,
  setIsEdit,
  setIsLoading,
  setImage
) => {
  setIsLoading(true);
  let user = structuredClone(profile);

  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/UserUpdate/${profile.Id}`;
  const config = ConfigBuilder("P", "JSON", profile, true, false, false);

  if (image !== null) {
    const storageRef = ref(storage, `/users/${v4() + image.file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image?.file);

    uploadTask.on(
      "state_changed",
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then(
          async (downloadURL) => {
            user.Avatar = downloadURL;
            const config_with_avatar = ConfigBuilder("P", "JSON", user, true, false, false);
            try {
              const req = await fetch(url, config_with_avatar);
              const res = await req.json();

              if (res.status === true) {
                window.location.reload();
                Notifier(dispatch, res.message, 'success');
              }
              
              else Notifier(dispatch, res.message, 'error');
            } 
            catch (error) {
              Notifier(dispatch, '', 'error')
            } 
            finally {
              setImage(null);
              setIsEdit(false);
              setIsLoading(false);
            }
          }
        );
      }
    );
  } 
  else {
    try {
      const req = await fetch(url, config);
      const res = await req.json();

      if (res.status === true) {
        Notifier(dispatch, res.message, "success");
        window.location.reload();
      }

      else Notifier(dispatch, res.message, "error");
    } 
    catch (error) {
      Notifier(dispatch, "", "error");
    } 
    finally {
      setImage(null);
      setIsEdit(false);
      setIsLoading(false);
    }
  }
};

export default UserUpdate;
