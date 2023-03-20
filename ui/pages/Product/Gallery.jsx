import { useState } from "react";

export default function Gallery({ productData }) {
  const { thumbnail, gallery } = productData;

  const [index, setIndex] = useState(0);

  const active = "relative h-24 bg-white ring-2 ring-blue-500 ring-inset";
  const inactive =
    "relative h-24 bg-black rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring   focus:ring-inse focus:ring-offset-4 focus:ring-opacity-50";

  return (
    <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
      <div className="grid grid-cols-4 gap-6">
        <button id="tabs-2-tab-1" className={index === 0 ? active : inactive}>
          <span className="absolute inset-0 rounded-md overflow-hidden">
            <img
              src={thumbnail}
              className="w-full h-full object-center object-cover"
            />
          </span>

          <span className="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none" />
        </button>

        {gallery.map((image, iteration) => (
          <button
            id="tabs-2-tab-1"
            className={index === iteration ? active : inactive}
            // onClick={() => setMainImage(image)}
          >
            <span className="absolute inset-0 rounded-md overflow-hidden">
              <img
                src={image}
                className="w-full h-full object-center object-cover"
              />
            </span>

            <span className="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none" />
          </button>
        ))}
      </div>
    </div>
  );
}
