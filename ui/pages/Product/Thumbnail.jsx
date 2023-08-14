import { array, bool, number } from "prop-types";
import { IsGiven } from "./";

export default function Thumbnail(props) {
  const { gallery, index, isGiven } = props;
  
  return (
    <div className="w-full aspect-w-1 aspect-h-1 relative h-[50vh]">
      <IsGiven isGiven={isGiven} />

      <img
        src={gallery[index]}
        loading="lazy"
        className="w-full object-center object-cover lg:rounded-lg md:rounded-lg xl:rounded-lg h-full"
      />
    </div>
  );
}

Thumbnail.propTypes = {
  gallery: array.isRequired,
  index: number.isRequired,
  isGiven: bool.isRequired
}