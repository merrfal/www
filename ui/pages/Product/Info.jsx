export default function Info({ productData }) {
  const { name, description } = productData;

  return (
    <>
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
        {name}
      </h1>

      <div className="text-base mb-8 text-gray-700 space-y-6">
        <p>{description}</p>
      </div>
    </>
  );
}
