import { array, func, number } from "prop-types";

export default function Gallery({ gallery, index, setIndex }) {
  const active = "absolute ring-4 inset-0 ring-[#477DFF] rounded-md overflow-hidden";
  const inactive = "absolute inset-0 rounded-md overflow-hidden";

  return (
    <div className="w-full max-w-2xl mx-auto block lg:max-w-none p-4 mt-2 lg:mt-6 md:mt-6 xl:mt-6 lg:p-0 xl:p-0 md:lg-0">
      <div className="grid grid-cols-4 gap-6">
        {gallery.map((image, iteration) => (
          <div key={iteration} className="relative h-24 rounded-lg p-1 cursor-pointer" onClick={() => index !== iteration && setIndex(iteration)}>
            <span className={index === iteration ? active : inactive}>
              <img 
                src={image} 
                className="w-full h-full object-center object-cover"
                loading="lazy"
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

Gallery.propTypes = {
  gallery: array.isRequired,
  index: number.isRequired,
  setIndex: func.isRequired
}