import { ConfigBuilder, Notifier, Url } from '../../utils';
import { storage } from '../../config/Firebase';
import { v4 } from 'uuid'
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';

const PageUpdate = async (dispatch, product, images, deletedImages, setIsLoading) => {
  setIsLoading(true);

  const url = `${Url}/api/products/ProductUpdate/${product._id}`;
  let page = structuredClone(product)
  let array = [];

  if (deletedImages !== 0) {
    for (let i = 0; i < deletedImages.length; i++) {
      const name = deletedImages[i].split('/products%2F').pop().split('?alt')[0];
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

        uploadTask.on("state_changed",
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
                const config_with_images = ConfigBuilder('PUT', 'JSON', page, true, false, false);

                try {
                  const req = await fetch(url, config_with_images);
                  const res = await req.json();

                  if (res.status === true) {
                    window.location.reload();
                    Notifier(dispatch, res.message, 'success')
                  }

                  else Notifier(dispatch, res.message, 'error')
                }
                catch (error) { Notifier(dispatch, '', 'error') }
                finally { setIsLoading(false) }
              }
            });
          }
        );
      }

      else {
        array = [...array, images[i]]
        if (i === images.length - 1) {
          page.Gallery = array
          const config = ConfigBuilder('PUT', 'JSON', page, true, false, false);

          try {
            const req = await fetch(url, config);
            const res = await req.json();

            if (res.status === true) {
              window.location.reload();
              Notifier(dispatch, res.message, 'success')
            }

            else Notifier(dispatch, res.message, 'error')
          }
          catch (error) { Notifier(dispatch, '', 'error') }
          finally { setIsLoading(false) }
        }
      }
    }
  }
  else {
    page.Gallery = []
    const config = ConfigBuilder('PUT', 'JSON', page, true, false, false);

    try {
      const req = await fetch(url, config);
      const res = await req.json();

      if (res.status === true) {
        window.location.reload();
        Notifier(dispatch, res.message, 'success')
      }

      else Notifier(dispatch, res.message, 'error')
    }
    catch (error) { Notifier(dispatch, '', 'error') }
    finally { setIsLoading(false) }
  };

};

export default PageUpdate;
