import { NameValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";

export default function Title({
  product: {
    productData: { name },
  },
  onInput,
  validation: v,
}) {
  const validation = NameValidation(name);

  return (
    <div className="col-span-6 sm:col-span-4">
      <label
        htmlFor="title"
        className="block text-sm font-medium text-gray-700"
      >
        {Translation("name-of-product")}
      </label>

      <input
        onChange={(e) => onInput("name", e)}
        value={name}
        type="text"
        id="title"
        placeholder={Translation("name-of-product-placeholder")}
        className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
      />

      {v.name && validation.error && (
        <p className="text-xs mt-1 ml-[1px] text-red-500">
          {validation.message}
        </p>
      )}
    </div>
  );
}
