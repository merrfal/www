export default function Gallery({ gallery, index, setIndex }) {
  const active = "absolute ring-4 inset-0 ring-[#477DFF] rounded-md overflow-hidden";
  const inactive = "absolute inset-0 rounded-md overflow-hidden";

  return (
    <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
      <div className="grid grid-cols-4 gap-6">
        {gallery.map((image, iteration) => (
          <div key={iteration} className="relative h-24 rounded-lg p-1 cursor-pointer" onClick={() => index !== iteration && setIndex(iteration)}>
            <span className={index === iteration ? active : inactive}>
              <img src={image} className="w-full h-full object-center object-cover"/>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
