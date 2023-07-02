import { array, bool, number } from "prop-types";
import { IsGiven } from "./";

export default function Thumbnail({ gallery, index, isGiven }) {
  return (
    <div className="w-full aspect-w-1 aspect-h-1 relative h-[50vh]">
      <IsGiven isGiven={isGiven} />

      <img
        src={gallery[index]}
        loading="lazy"
        className="w-full object-center object-cover rounded-lg sm:rounded-xl h-full"
      />
    </div>
  );
}

Thumbnail.propTypes = {
  gallery: array.isRequired,
  index: number.isRequired,
  isGiven: bool.isRequired
}