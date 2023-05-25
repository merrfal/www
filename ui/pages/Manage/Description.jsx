import { DescriptionValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";

export default function Description({
  product: {
    productData: { description },
  },
  onInput,
  validation: v,
}) {
  const validation = DescriptionValidation(description);

  return (
    <div>
      <label
        htmlFor="description"
        className="block text-sm font-medium text-gray-700"
      >
        {Translation("product-description")}
      </label>

      <div className="mt-1">
        <textarea
          onChange={(e) => onInput("description", e)}
          value={description}
          id="description"
          placeholder={Translation("product-description-placeholder")}
          rows="7"
          className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
        />
      </div>

      {v.description && validation.error && (
        <p className="text-xs mt-1 ml-[1px] text-red-500">
          {validation.message}
        </p>
      )}
    </div>
  );
}
