import { Translation } from "../../../utils/Translations";
import { RequiredLabel, Wildcard } from "../"
import { AllCountries } from "../../../data/Locations";
import { CountryValidation } from "../../../utils/Forms";

export default function Country({ user, onInput, validations}) {
  const validation = CountryValidation(user?.userAdditionalData?.country);

  return (
    <div className="col-span-12 lg:col-span-3 flex flex-col justify-start items-start">
      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
        {Translation("country")}<Wildcard />
      </label>

      <select
        placeholder={Translation("select-country")}
        value={user?.userAdditionalData?.country}
        id="country"
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        style={user?.userAdditionalData?.country === "" ? {color: "#777"} : {}}
        onChange={(event) => onInput("country", event, true, "userAdditionalData")}
      >
        { 
          user?.userAdditionalData?.country === "" &&  
          <option value="" disabled>
            {Translation("select-the-placeholder")}
          </option>
        }

        {AllCountries.map((country, index) => (
          <option key={index} value={country["iso_code"]}>
            {country?.name}
          </option>
        ))}
      </select>

      {validations.country && validation.error && <RequiredLabel message={validation?.message} />}
    </div>
  );
}