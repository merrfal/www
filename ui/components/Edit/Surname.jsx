import { UserSurnameValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";
import { Wildcard, RequiredLabel } from "../";

export default function Surname({ user, onInput, validations }) {
  const validation = UserSurnameValidation(user?.userData?.surname);

  return (
    <div className="col-span-12 lg:col-span-3 flex flex-col justify-start items-start">
      <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
        {Translation("surname")}<Wildcard />
      </label>

      <input
        placeholder={Translation("surname-placeholder")}
        value={user?.userData?.surname}
        type="text"
        id="surname"
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        onChange={(e) => onInput("surname", e)}
      />

      {validations?.surname && validation?.error && <RequiredLabel message={validation?.message} />}
    </div>
  );
}
