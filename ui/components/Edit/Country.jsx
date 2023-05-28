import { Translation } from "../../../utils/Translations";
import { Wildcard } from "../"
import { Countries } from "../../../data/Locations";

export default function Country({ user, onInput, validations }) {
  return (
    <div className="col-span-6 sm:col-span-6 lg:col-span-3">
      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
        {Translation("country")}<Wildcard />
      </label>

      <select
        placeholder={Translation("select-country")}
        value={user?.userAdditionalData?.country}
        id="country"
        onChange={(event) => onInput("country", event, true, "userAdditionalData")}
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
      >
        {Countries.map((country, index) => (
          <option key={index} value={country["iso_code"]}>
            {country?.name}
          </option>
        ))}
      </select>
    </div>
  );
}
