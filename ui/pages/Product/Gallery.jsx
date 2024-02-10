export default function Gallery(props) {
  const { gallery, index, setIndex } = props
  
  const active = "absolute ring-4 inset-0 ring-[#477DFF] rounded-md overflow-hidden"
  const inactive = "absolute inset-0 rounded-md overflow-hidden"

  if (gallery.length > 0) return (
    <div className="w-full max-w-2xl mx-auto block lg:max-w-none p-4 mt-2 lg:mt-6 md:mt-6 xl:mt-6 lg:p-0 xl:p-0 md:lg-0">
      <div className="grid grid-cols gap-6">
        {gallery?.map((image, iteration) => (
          <div key={iteration} className="relative h-24 rounded-lg p-1 cursor-pointer" onClick={() => index !== iteration && setIndex(iteration)}>
            <span className={index === iteration ? active : inactive}>
              <img 
                src={image} 
                className="w-full h-full object-center object-cover"
                loading="lazy"
                onDragStart={(e) => e.preventDefault()}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}