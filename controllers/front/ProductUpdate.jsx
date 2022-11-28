import { ConfigBuilder, Notifier } from '../../utils';
import { storage } from '../../config/Firebase';
import { v4 } from 'uuid'
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';


const PageUpdate = async (dispatch, product, images, deletedImages, setIsLoading) => {
  setIsLoading(true);
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductUpdate/${product._id}`;
  let page = structuredClone(product)
  let array = [];
  console.log("iamge", deletedImages.length)

  if (deletedImages !== 0) {
    for (let i = 0; i < deletedImages.length; i++) {
      console.log("iamge", deletedImages[i])
      const name = deletedImages[i].split('/products%2F').pop().split('?alt')[0];
      console.log("name", name)
      const desertRef = ref(storage, `products/${name}`);
      await deleteObject(desertRef)

    }
  }

  if (images.length !== 0) {
    let id = v4()
    for (let i = 0; i < images.length; i++) {
      if (images[i].data_url) {
        const storageRef = ref(storage, `/products/${id + images[i]?.file.name}`);

        const uploadTask = uploadBytesResumable(storageRef, images[i]?.file);

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
              array = [...array, downloadURL]
              if (i === images.length - 1) {
                page.Gallery = array
                const config2 = ConfigBuilder('PUT', 'JSON', page, true, false, false);
                try {
                  const req = await fetch(url, config2);
                  const res = await req.json();

                  if (res.status === true) {
                    window.location.reload();
                    Notifier(
                      {
                        dispatch: dispatch,
                        Title: res.message,
                        Type: 'success',
                      }
                    );
                  }
                  else {
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
                      Title: "Something wen't wrong while updating the page.",
                      Type: 'error',
                    }
                  );
                }
                // finally {
                //   setIsLoading(false)
                // }
              }
            });

          }
        );
      }
      else {
        array = [...array, images[i]]
        if (i === images.length - 1) {
          console.log("333")

          console.log("array", array)
          page.Gallery = array
          const config2 = ConfigBuilder('PUT', 'JSON', page, true, false, false);
          try {
            const req = await fetch(url, config2);
            const res = await req.json();

            if (res.status === true) {
              window.location.reload();

              Notifier(
                {
                  dispatch: dispatch,
                  Title: res.message,
                  Type: 'success',
                }
              );
            }
            else {
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
                Title: "Something wen't wrong while updating the page.",
                Type: 'error',
              }
            );
          }
          // finally {
          //   setIsLoading(false)
          // }
        }
      }
    }
  }
  else {
    page.Gallery = []
    const config2 = ConfigBuilder('PUT', 'JSON', page, true, false, false);

    try {
      const req = await fetch(url, config2);

      const res = await req.json();


      if (res.status === true) {
        window.location.reload();
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
    // finally {
    //   setIsLoading(false)
    // }

  };

};

export default PageUpdate;
