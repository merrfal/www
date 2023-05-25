import { Categories as AllCategories } from "../../../data";
import { CategoryValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";

export default function Categories({
  product: {
    productData: { category },
  },
  onInput,
  validation: v,
}) {
  const validation = CategoryValidation(category);

  return (
    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
      <label htmlFor="category" className="block text-sm font-medium text-gray-700">
        {Translation("category")}
      </label>

      <select
        onChange={(e) => onInput("category", e)}
        value={category}
        id="category"
        className="p-3 mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm"
      >
        {AllCategories.map((category) => (
          <option value={category._id} key={category._id}>
            {category.name}
          </option>
        ))}
      </select>

      {v.category && validation.error && (
        <p className="text-xs mt-1 ml-[1px] text-red-500">
          {validation.message}
        </p>
      )}
    </div>
  );
}
