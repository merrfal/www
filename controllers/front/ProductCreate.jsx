import { ConfigBuilder, Notifier } from '../../utils';
import { UnsetPrepage } from '../../data/redux/PageSlice';
import { storage } from '../../config/Firebase';
import { v4 } from 'uuid'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const ProductCreate = async (page, dispatch, images, setIsLoading) => {
  let product = structuredClone(page)
  let array = [];
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductCreate`;
  const config = ConfigBuilder('P', 'JSON', page, true, false, false);
  setIsLoading(true)
  
  if (images.length !== 0) {
    let id = v4()
    for (let i = 0; i < images.length; i++) {
      const storageRef = ref(storage, `/products/${id + images[i]?.file.name}`);

      console.log("image", images[i])

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
          console.log("get", getDownloadURL)
          await getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("downloadURL", downloadURL)
            array = [...array, downloadURL]
            if (i === images.length - 1) {
              console.log("array", array)
              product.Gallery = array
              const config2 = ConfigBuilder('P', 'JSON', product, true, false, false);
              try {
                const req = await fetch(url, config2);
                const res = await req.json();

                if (res.status === true) {
                  Notifier(
                    {
                      dispatch: dispatch,
                      Title: res.message,
                      Type: 'success',
                    }
                  );

                  dispatch(UnsetPrepage());

                  window.location.href = "/produktet/" + res.data.Slug;
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
                    Title: "Something wen't wrong while creating this page.",
                    Type: 'error',
                  }
                );
              }
              finally {
                setIsLoading(false)
              }
            }

          });

        }
      );
    }


  }
  // else {
  //   try {
  //     const req = await fetch(url, config);
  //     const res = await req.json();

  //     if (res.status === true) {
  //       Notifier(
  //         {
  //           dispatch: dispatch,
  //           Title: res.message,
  //           Type: 'success',
  //         }
  //       );

  //       dispatch(UnsetPrepage());

  //       window.location.href = "/produktet/" + res.data.Slug;
  //     }
  //     else {
  //       Notifier(
  //         {
  //           dispatch: dispatch,
  //           Title: res.message,
  //           Type: 'error',
  //         }
  //       );
  //     }
  //   } catch (error) {
  //     Notifier(
  //       {
  //         dispatch: dispatch,
  //         Title: "Something wen't wrong while creating this page.",
  //         Type: 'error',
  //       }
  //     );
  //   }
  // }


};

export default ProductCreate;
