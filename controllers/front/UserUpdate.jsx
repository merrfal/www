import { ConfigBuilder, Notifier } from '../../utils';
import { storage } from '../../config/Firebase';
import { v4 } from 'uuid'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const UserUpdate = async (dispatch, profile, image, setIsEdit, setIsLoading, setImage) => {
  // setIsLoading(true)
  let user = structuredClone(profile)
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/UserUpdate/${profile.Id}`;
  const config = ConfigBuilder('P', 'JSON', profile, true, false, false);

  if (image !== null) {

    const storageRef = ref(storage, `/users/${v4() + image.file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, image?.file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          user.Avatar = downloadURL
          const config2 = ConfigBuilder('P', 'JSON', user, true, false, false);
          try {
            const req = await fetch(url, config2);
            const res = await req.json();

            if (res.status === true) {
              // setIsEdit(false)

              Notifier(
                {
                  dispatch: dispatch,
                  Title: res.message,
                  Type: 'success',
                }
              );
            } else {
              Notifier(
                {
                  dispatch: dispatch,
                  Title: res.message,
                  Type: 'error',
                }
              );
            }
          }
          catch (error) {
            Notifier(
              {
                dispatch: dispatch,
                Title: `Something wen't wrong trying to update your profile.`,
                Type: 'error',
              }
            );
          }
          finally {
            setImage(null)
            setIsEdit(false)

          }

        });

      }
    );
  }
  else {
    try {
      const req = await fetch(url, config);
      const res = await req.json();

      if (res.status === true) {
        Notifier(
          {
            dispatch: dispatch,
            Title: res.message,
            Type: 'success',
          }
        );
      } else {
        Notifier(
          {
            dispatch: dispatch,
            Title: res.message,
            Type: 'error',
          }
        );
      }
    } catch (error) {
      Notifier(
        {
          dispatch: dispatch,
          Title: `Something wen't wrong trying to update your profile.`,
          Type: 'error',
        }
      );
    }
    finally {
      setIsEdit(false)
    }
  };
}



export default UserUpdate;
