import { Translation } from "../../../utils/Translations";
import { Wildcard } from "../";
import { Countries } from "../../../data/Locations";

export default function City({ user, onInput }) {
  const disableCity = user?.userAdditionalData?.country === "GLOBAL" || user?.userAdditionalData?.country === undefined || user?.userAdditionalData?.country === null;
  
  return (
    <div className={disableCity ? "col-span-6 sm:col-span-3 lg:col-span-3 opacity-50 pointer-events-none" : "col-span-6 sm:col-span-3 lg:col-span-3"}>
      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
        {Translation("city")}<Wildcard />
      </label>

      <select
        placeholder={Translation("select-city")}
        value={user?.userAdditionalData?.city}
        id="city"
        disabled={disableCity}
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        onChange={(event) => onInput("city", event, true, "userAdditionalData")}
      >
        {Countries.find((country) => country["iso_code"] === user?.userAdditionalData?.country)
          ?.cities?.map((city, index) => (
            <option key={index} value={city?.value}>
              {city?.name}
            </option>
        ))}
      </select>
    </div>
  );
}
