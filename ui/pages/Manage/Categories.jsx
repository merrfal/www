import { Categories as AllCategories } from "../../../data";
import { CategoryValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";
import { RequiredLabel, Wildcard } from "../../components";

export default function Categories({product, onInput, validation: v}) {
  const validation = CategoryValidation(product?.productData?.category);

  return (
    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
      <label htmlFor="category" className="block text-sm font-medium text-gray-700">
        {Translation("category")}<Wildcard />
      </label>

      <select
        onChange={(e) => onInput("category", e)}
        value={product?.productData?.category}
        id="category"
        className="p-3 mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm"
        style={product?.productData?.category === "" ? {color: "#777"} : {}}
      >
        { 
          product?.productData?.category === "" &&  
          <option value="" disabled>
            {Translation("select-the-placeholder")}
          </option>
        }

        {AllCategories.map((category, index) => (
          <option value={category?._id} key={index}>
            {category?.name}
          </option>
        ))}
      </select>

      {v.category && validation.error && <RequiredLabel message={validation.message} />}
    </div>
  );
}
