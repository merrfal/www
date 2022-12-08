import { ConfigBuilder, Notifier } from "../../utils";
import { UnsetPrepage } from "../../data/redux/PageSlice";
import { storage } from "../../config/Firebase";
import { v4 } from "uuid";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const ProductCreate = async (page, dispatch, images, setIsLoading) => {
  setIsLoading(true);

  let product = structuredClone(page);
  let array = [];
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductCreate`;
  const config = ConfigBuilder("P", "JSON", page, true, false, false);

  if (images.length !== 0) {
    let id = v4();
    for (let i = 0; i < images.length; i++) {
      const storageRef = ref(storage, `/products/${id + images[i]?.file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, images[i]?.file);

      uploadTask.on("state_changed",
        (snapshot) => {
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        }, async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then(
            async (downloadURL) => {
              array = [...array, downloadURL];
              if (i === images.length - 1) {
                product.Gallery = array;
                const config_with_images = ConfigBuilder("P", "JSON", product, true, false, false);

                try {
                  const req = await fetch(url, config_with_images);
                  const res = await req.json();

                  if (res.status === true) {
                    Notifier(dispatch, res.message, 'success');
                    dispatch(UnsetPrepage());
                    window.location.href = "/produktet/" + res.data.Slug;
                  }

                  else Notifier(dispatch, res.message, 'error');
                } catch (error) {
                  Notifier(dispatch, "Something wen't wrong while creating this page.", 'error');
                } finally {
                  setIsLoading(false);
                }
              }
            }
          );
        }
      );
    }
  }

  else {
    try {
      const req = await fetch(url, config);
      const res = await req.json();

      if (res.status === true) {
        Notifier(dispatch, res.message, 'success');
        dispatch(UnsetPrepage());
        window.location.href = "/produktet/" + res.data.Slug;
      }

      else Notifier(dispatch, res.message, 'error');
    } catch (error) {
      Notifier(dispatch, "Something wen't wrong while creating this page.", 'error');
    } finally {
      setIsLoading(false);
    }
  }
};

export default ProductCreate;
