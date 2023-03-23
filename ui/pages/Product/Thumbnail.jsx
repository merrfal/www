export default function Thumbnail({ gallery, index }) {
  return (
    <div className="w-full aspect-w-1 aspect-h-1">
      <div>
        <img
          src={gallery[index]}
          alt="Product Thumbnail"
          className="w-full h-[50vh] object-center object-cover sm:rounded-lg"
        />
      </div>
    </div>
  );
}
