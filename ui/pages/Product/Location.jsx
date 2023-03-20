import { BigLocationIcon } from "../../icons";

export default function Location({productData}) {
  const {address, zipCode, city} = productData;

  return (
    <div className="mt-3">
      <div className="flex mb-2">
        <BigLocationIcon />
        <p className="text-m text-gray-900 ml-2">
          {address}, {zipCode}, {city}
        </p>
      </div>
    </div>
  );
}
