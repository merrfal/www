import { IsGiven } from "./";

export default function Thumbnail(props) {
  const { gallery, index, isGiven } = props;
  
  return (
    <div className="w-full bg-gray-50 aspect-w-1 aspect-h-1 relative h-[50vh] lg:rounded-lg md:rounded-lg xl:rounded-lg outline-none border-none">
      <IsGiven isGiven={isGiven} />

      {
        gallery[index] &&
        <img
          src={gallery[index]}
          loading="lazy"
          className="w-full object-center object-cover lg:rounded-lg md:rounded-lg xl:rounded-lg h-full outline-none border-none"
        />
      }
    </div>
  );
}