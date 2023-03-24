import { AddressValidation } from "../../../utils/Forms";

export default function Address({ user, onInput, validations}) {
  const validation = AddressValidation(user?.userAdditionalData?.address);

  return (
    <div className="col-span-6">
      <label htmlFor="a" className="block text-sm font-medium text-gray-700">
        Adresa
      </label>

      <input
        type="text"
        placeholder="Adresa"
        value={user?.userAdditionalData?.address}
        id="a"
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        onChange={(e) => onInput("address", e, true, "userAdditionalData")}
      />

      {validations.address && validation.error && (
        <p className="text-xs mt-1 ml-[1px] text-red-500">
          {validation.message}
        </p>
      )}
    </div>
  );
}
