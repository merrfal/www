export default function Thumbnail({ productData }) {
  return (
    <div className="w-full aspect-w-1 aspect-h-1">
      <div>
        <img
          src={productData.thumbnail}
          alt="Product Thumbnail"
          className="w-full h-full object-center object-cover sm:rounded-lg"
        />
      </div>
    </div>
  );
}
