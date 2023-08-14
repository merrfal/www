import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { Create, Update } from "../../../api/Product";
import { Storage } from "../../../configs/Firebase";
import { Notification } from "../../../utils/Response";
import { Translation } from "../../../utils/Translations";
import { Auth as AuthInstance } from "../../../configs/Firebase";
import { GoogleAuthProvider, getAdditionalUserInfo, signInWithPopup } from "firebase/auth";
import { Login, Register } from "../../../api/User";
import { LogoutAccount } from "../../../controllers/Redux";

import {
  AddressValidation,
  CategoryValidation,
  CityValidation,
  CountryValidation,
  DescriptionValidation,
  ImagesValidation,
  ModeValidation,
  NameValidation,
  PhoneValidation,
  SlugBuilder,
} from "../../../utils/Forms";

export default function Buttons(props) {
  const { 
    product, 
    account, 
    setValidation, 
    mode, 
    onUpdate, 
    setIsHold 
  } = props;

  const dispatch = useDispatch();
  const router = useRouter();

  const onValidation = () => {
    setValidation({
      name: true,
      description: true,
      address: true,
      phone: true,
      city: true,
      category: true,
      country: true,
      gallery: true,
      postedAnonymously: true,
    });

    let validations = true;

    const name = NameValidation(product.productData.name);
    const description = DescriptionValidation(product.productData.description);
    const address = AddressValidation(product.productData.address);
    const phone = PhoneValidation(product.productData.phone);
    const city = CityValidation(product.productData.city);
    const category = CategoryValidation(product.productData.category);
    const country = CountryValidation(product.productData.country);
    const images = ImagesValidation(product.productData.gallery);
    const mode = ModeValidation(product.productData.postedAnonymously);

    if (name.error) validations = false;
    if (description.error) validations = false;
    if (address.error) validations = false;
    if (phone.error) validations = false;
    if (images.error) validations = false;
    if (city.error) validations = false;
    if (category.error) validations = false;
    if (country.error) validations = false;
    if (mode.error) validations = false;

    return validations;
  };

  const Auth = async () => {
    if(account.Loading) return;
    
    try {
      var Provider = new GoogleAuthProvider();
      const data = await signInWithPopup(AuthInstance, Provider);

      if (data) {
        const user = data.user;
        const { isNewUser } = getAdditionalUserInfo(data);

        if (isNewUser) Register(user, dispatch);
        else Login(user.uid, dispatch);
      } 
      
      else {
        const alert = {
          dispatch,
          message: Translation("user-auth-error"),
          type: "error",
        }

        dispatch(LogoutAccount());
        Notification(alert);
      }
    } 
    
    catch (error) {
      const alert = {
        dispatch,
        message: Translation("user-auth-error"),
        type: "error",
      }

      dispatch(LogoutAccount());
      Notification(alert);
    }
  };

  const handlePublish = async () => {
    if (!onValidation()) {
      typeof window !== "undefined" &&
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      return;
    }

    if(!account.Auth) {
      Auth();
      return;
    }

    setIsHold(true);

    const gallery = [];

    const compressImage = async (file, id, index, cropOptions = {}) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
    
          img.src = event.target.result;
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Set default cropping dimensions if not provided
            const defaultWidth = 1080;
            const defaultHeight = 720;
            const targetWidth = cropOptions.width || defaultWidth;
            const targetHeight = cropOptions.height || defaultHeight;
    
            // Calculate cropping dimensions while preserving aspect ratio
            const sourceAspectRatio = img.width / img.height;
            const targetAspectRatio = targetWidth / targetHeight;
            let cropWidth, cropHeight;
            
            if (sourceAspectRatio > targetAspectRatio) {
              cropWidth = img.height * targetAspectRatio;
              cropHeight = img.height;
            } else {
              cropWidth = img.width;
              cropHeight = img.width / targetAspectRatio;
            }
    
            // Calculate cropping position
            const cropX = (img.width - cropWidth) / 2;
            const cropY = (img.height - cropHeight) / 2;
    
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            
            // Draw the cropped portion of the image onto the canvas
            ctx.drawImage(img, cropX, cropY, cropWidth, cropHeight, 0, 0, targetWidth, targetHeight);
    
            canvas.toBlob(
              (blob) => {
                const compressedImageRef = ref(Storage, `products/${id}`);
                const uploadTask = uploadBytesResumable(compressedImageRef, blob);
    
                uploadTask
                  .then(async (snapshot) => {
                    const url = await getDownloadURL(snapshot.ref);
                    const compressedImg = {
                      url,
                      id,
                      isMain: index === 0,
                      filename: `${file.name.split('.')[0]}.webp`,
                    };
    
                    resolve(compressedImg);
                  })
    
                  .catch((error) => {
                    console.error('Error uploading compressed image:', error);
                    reject(error);
                  });
              },
              'image/webp',
              1
            );
          };
        };
        reader.readAsDataURL(file);
      });
    };
    
    
    const promises = product.productData.gallery.map(async (image, index) => {
      const id = v4();
    
      try {
        const compressedImg = await compressImage(image.file, id, index);
        gallery.push(compressedImg);
      } 
      
      catch (error) {
        const alert = {
          type: 'error',
          message: Translation('couldnt-upload-to-firebase'),
          dispatch,
        };
    
        Notification(alert);
      }
    });
    
    await Promise.all(promises);

    const initalProduct = {
      ...product.productData,
      user: account.User._id,
      slug: SlugBuilder(product.productData.name),
      gallery,
    };

    Create(initalProduct, router, setIsHold, dispatch);
  };

  const handleUpdate = async () => {
    if (!onValidation()) {
      typeof window !== "undefined" &&
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      return;
    }

    Update({...product.productData}, router, setIsHold, dispatch);
  }

  const handleDelete = () => onUpdate(
    product?.productData?.name, 
    product?.productData?.slug,
    product?.productData?.gallery,
  )

  return (
    <div className="text-right mb-2 mr-2">
      {
        mode === "edit" && 
          <button onClick={handleDelete} className="inline-flex mt-8 justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none mr-4 text-[#dc2828] bg-[#dc282824] hover:bg-[#dc282835] transition-all">
            {Translation("delete-product")}
          </button>
      }

      {
        mode === "edit" &&
          <button onClick={handleUpdate} className="inline-flex mt-8 justify-center rounded-md border border-transparent bg-[#377DFF] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#3073ee] focus:outline-none transition-all">
            {Translation("update-product")}
          </button>
      }

      {
        mode === "create" &&
          <button onClick={handlePublish} className="inline-flex mt-8 justify-center rounded-md border border-transparent bg-[#377DFF] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#3073ee] focus:outline-none transition-all">
            {Translation("post-product")}
          </button>
      }
    </div>
  );
}