import * as Messages from "../../../configs/Messages";

import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { Create, Update } from "../../../api/Product";
import { Storage } from "../../../configs/Firebase";
import { Notification } from "../../../utils/Response";
import { Translation } from "../../../utils/Translations";

import {
  AddressValidation,
  DescriptionValidation,
  ImagesValidation,
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
      gallery: true,
      postedAnonymously: true,
    });

    let validations = true;

    const name = NameValidation(product.productData.name);
    const description = DescriptionValidation(product.productData.description);
    const address = AddressValidation(product.productData.address);
    const phone = PhoneValidation(product.productData.phone);
    const images = ImagesValidation(product.productData.gallery);

    if (name.error) validations = false;
    if (description.error) validations = false;
    if (address.error) validations = false;
    if (phone.error) validations = false;
    if (images.error) validations = false;

    return validations;
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

    setIsHold(true);

    const gallery = [];

    const promises = product.productData.gallery.map(async (image, index) => {
      const id = v4();
      const newImage = ref(Storage, `products/${id}`);
      const uploadTask = uploadBytesResumable(newImage, image.file);

      try {
        const snapshot = await uploadTask;
        const url = await getDownloadURL(snapshot.ref);
        const img = {
          url,
          isFirebase: true,
          id,
          isMain: index === 0,
          filename: image.file.name,
        };
        
        gallery.push(img);
      } 
      
      catch (error) {
        const alert = {
          type: "error",
          message: Messages.COULDNT_UPLOAD_TO_FIREBASE,
          dispatch,
        }

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
    product?.productData?.slug
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
