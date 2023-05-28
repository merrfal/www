import { NameValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";
import { RequiredLabel, Wildcard } from "../../components";

export default function Title({product, onInput, validation: v}) {
  const validation = NameValidation(product?.productData?.name);

  return (
    <div className="col-span-6 sm:col-span-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        {Translation("name-of-product")}<Wildcard />
      </label>

      <input
        onChange={(e) => onInput("name", e)}
        value={product?.productData?.name}
        type="text"
        id="name"
        placeholder={Translation("name-of-product-placeholder")}
        className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
      />

      {v.name && validation.error && <RequiredLabel message={validation.message} />}
    </div>
  );
}
