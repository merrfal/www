import { KosovoCities } from "../../../data";
import { CityValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";
import { RequiredLabel, Wildcard } from "../../components";

export default function Cities({product, onInput, validation: v}) {
  const validation = CityValidation(product?.productData?.city);

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
        className="p-3 mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm"
      >
        {KosovoCities.map((city, index) => (
          <option value={city.value} key={index}>
            {city?.name}
          </option>
        ))}
      </select>

      {v.city && validation.error && <RequiredLabel message={validation.message} />}
    </div>
  );
}
