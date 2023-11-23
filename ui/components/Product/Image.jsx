import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { Storage } from "../../../configs/Firebase";
import { Category, GivenStatus } from ".";
import { NO_THUMBNAIL } from "../../../configs/Constants";

export default function Image(props) {
  const { productData, showCategory, allowManage, showGiven } = props;
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    let thumb = productData.gallery[0].id;

    if (thumb !== undefined) {
      const file = `products/${thumb}`;
      const unextracted = ref(Storage, file);

      getDownloadURL(unextracted)
        .then((url) => setThumbnail(url))
        .catch(() => setThumbnail("product-no.png"));
    }
  }, [productData.gallery]);

  return (
    <div className="-mb-1 relative h-[280px] mt-0 md:h-[360px] aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-[.999999999999] transition-all lg:aspect-none hover:cursor-pointer">
      <div className={allowManage ? "absolute top-2 z-[1] left-2 flex flex-col items-start" : "absolute top-2 left-2 z-[1] flex justify-center items-center"}>
        { showCategory && <Category category={productData.category} /> }
        { showCategory && <div className={allowManage ? "h-0 font-bold w-[0px] bg-[#f8f8f850] my-0.5" : "h-2.5 w-[1px] bg-[#f8f8f850] mr-1"} /> }
        { showGiven && <GivenStatus given={productData.given} /> }
      </div>

      <img
        loading="lazy"
        onError={() => setThumbnail(NO_THUMBNAIL)}
        src={thumbnail}
        className={`h-full duration-700 ease-in-out group-hover:opacity-75 w-full object-cover object-center lg:h-full lg:w-full
            ${
              thumbnail === null
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            }
        `}
      />
    </div>
  );
}