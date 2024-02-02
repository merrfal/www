import { Countries } from "../../../data";
import { CountryValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";
import { RequiredLabel, Wildcard } from "../../components";

export default function Country({product, onInput, validation: v}) {
  const validation = CountryValidation(product?.productData?.country);

  return (
    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
        {Translation("country")}<Wildcard />
      </label>

      <select
        placeholder={Translation("country-placeholder")}
        value={product?.productData?.country}
        id="country"
        className="p-3 mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm"
        style={product?.productData?.country === "" ? {color: "#777"} : {}}
        onChange={(e) => onInput("country", e)}
      >
        { 
          product?.productData?.country === "" &&  
          <option value="" disabled>
            {Translation("select-the-placeholder")}
          </option>
        }

        {Countries.map((country, index) => (
          <option key={index} value={country["iso_code"]}>
            {country?.name}
          </option>
        ))}
      </select>

      {v?.country && validation?.error && <RequiredLabel message={validation?.message} />}
    </div>
  );
}