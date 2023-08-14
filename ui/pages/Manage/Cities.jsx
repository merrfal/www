import { Countries } from "../../../data";
import { CityValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";
import { RequiredLabel, Wildcard } from "../../components";

export default function Cities({product, onInput, validation: v}) {
  const validation = CityValidation(product?.productData?.city);
  const disableCity = product?.productData?.country === "";

  return (
    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
        {Translation("city")}<Wildcard />
      </label>

      <select
        defaultValue={Translation("city-placeholder")}
        value={product?.productData?.city}
        onChange={(e) => onInput("city", e)}
        id="city"
        disabled={disableCity}
        className="p-3 mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm"
        style={disableCity ? {color: "#777"} : {}}
      >
        { 
          product?.productData?.city === "" &&  
          <option value="" disabled>
            {Translation("select-the-placeholder")}
          </option>
        }

        {Countries.find((country) => country["iso_code"] === product?.productData?.country)
          ?.cities?.map((city, index) => (
            <option key={index} value={city?.value}>
              {city?.name}
            </option>
        ))}
      </select>

      {v.city && validation.error && <RequiredLabel message={validation.message} />}
    </div>
  );
}