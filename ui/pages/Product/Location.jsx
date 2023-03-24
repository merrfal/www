import { BigLocationIcon } from "../../icons";

export default function Location({ productData }) {
  const { address, city } = productData;
  const cloneAddress = address.charAt(0).toUpperCase() + address.slice(1) || "";
  const cloneCity = city.charAt(0).toUpperCase() + city.slice(1) || "";

  return (
    <div className="flex">
      <BigLocationIcon />
      <p className="text-sm text-gray-500 ml-1.5">
        {cloneAddress}, {cloneCity}
      </p>
    </div>
  );
}
