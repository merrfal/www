export default function Thumbnail({ gallery, index }) {
  return (
    <div className="w-full aspect-w-1 aspect-h-1">
      <div>
        <img
          src={gallery[index]}
          alt="Product Thumbnail"
          className="w-full h-auto object-center object-cover rounded-lg sm:rounded-xl "

          style={{ maxHeight: "50vh" }}
        />
      </div>
    </div>
  );
}
