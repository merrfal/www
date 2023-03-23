import { BigLocationIcon } from "../../icons";

export default function Location({ productData }) {
  const { address, zipCode, city } = productData;

  return (
    <div className="flex">
      <BigLocationIcon />
      <p className="text-sm text-gray-500 ml-1.5">
        {address}, {zipCode}, {city}
      </p>
    </div>
  );
}
