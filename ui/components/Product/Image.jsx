import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { Storage } from "../../../configs/Firebase";

export default function Image({ productData: { gallery } }) {
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    let thumb = gallery[0].id;

    if (thumb !== undefined) {
      const file = `products/${thumb}`;
      const unextracted = ref(Storage, file);

      getDownloadURL(unextracted)
        .then((url) => setThumbnail(url))
        .catch(() => setThumbnail("product-no.png"));
    }
  }, [gallery]);

  return (
    <div className="hover:cursor-pointer min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-80 transition-all lg:aspect-none lg:h-80">
      <img
        onError={() => setThumbnail("product-no.png")}
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
