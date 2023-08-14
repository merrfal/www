import { AddressValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";
import { RequiredLabel, Wildcard } from "../../components";

export default function Address({product, onInput, validation: v}) {
  const validation = AddressValidation(product?.productData?.address);

  return (
    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
        {Translation("take-address")}<Wildcard />
      </label>

      <input
        type="text"
        id="address"
        onChange={(e) => onInput("address", e)}
        value={product?.productData?.address}
        placeholder={Translation("take-address-placeholder")}
        className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
      />

      {v?.address && validation?.error && <RequiredLabel message={validation?.message} />}
    </div>
  );
}