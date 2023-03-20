import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import {  Storage } from "../../../configs/Firebase";
import { ImageValidation } from "../../../utils/Validations";

export default function Image({ productData: { thumbnail } }) {
  const [thumb, setThumb] = useState(null);

  useEffect(() => {
    if (thumbnail !== null && thumbnail !== undefined) {
      const condition = ImageValidation(thumbnail);

      if (condition) {
        const file = `products/${thumbnail}`;
        const unextracted = ref(Storage, file);

        getDownloadURL(unextracted).then((url) => setThumb(url));
      } 
      
      else setThumb(thumbnail);
    }

    else setThumb("/product-no.png");
  }, [thumbnail]);

  return (
    <div className="hover:cursor-pointer min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-80 transition-all lg:aspect-none lg:h-80">
      <img
        src={thumb || "/product-no.png"}
        className={`h-full duration-700 ease-in-out group-hover:opacity-75 w-full object-cover object-center lg:h-full lg:w-full
            ${
              thumb === null
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            }
        `}
      />
    </div>
  );
}
