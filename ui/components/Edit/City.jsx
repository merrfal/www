import { Translation } from "../../../utils/Translations";
import { RequiredLabel, Wildcard } from "../";
import { AllCountries } from "../../../data/Locations";
import { CityValidation } from "../../../utils/Forms";

export default function City({ user, onInput, validations }) {
  const validation = CityValidation(user?.userAdditionalData?.city);

  const disableCity = user?.userAdditionalData?.country === "GLOBAL" || user?.userAdditionalData?.country === "";
  
  return (
    <div className={disableCity ? "col-span-12 lg:col-span-3 flex flex-col justify-start items-start opacity-50 pointer-events-none" : "col-span-12 lg:col-span-3 flex flex-col justify-start items-start"}>
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
        style={disableCity ? {color: "#777"} : {}}
      >
        { 
          user?.userAdditionalData?.city === "" &&  
          <option value="" disabled>
            {Translation("select-the-placeholder")}
          </option>
        }

        {AllCountries.find((country) => country["iso_code"] === user?.userAdditionalData?.country)
          ?.cities?.map((city, index) => (
            <option key={index} value={city?.value}>
              {city?.name}
            </option>
        ))}
      </select>

      {validations.city && validation.error && <RequiredLabel message={validation?.message} />}
    </div>
  );
}
