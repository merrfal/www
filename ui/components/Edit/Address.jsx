import { AddressValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";
import { RequiredLabel, Wildcard } from "../../components";

export default function Address({ user, onInput, validations}) {
  const validation = AddressValidation(user?.userAdditionalData?.address);

  return (
    <div className="col-span-12 lg:col-span-3 flex flex-col justify-start items-start">
      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
        {Translation("address")}<Wildcard />
      </label>

      <input
        type="text"
        placeholder={Translation("address-placeholder")}
        value={user?.userAdditionalData?.address}
        id={Translation("address-placeholder")}
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        onChange={(e) => onInput("address", e, true, "userAdditionalData")}
      />

      {validations?.address && validation?.error && <RequiredLabel message={validation?.message} />}
    </div>
  );
}