import { PhoneValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";
import { Wildcard, RequiredLabel } from "../";

export default function Phone({ user, onInput, validations }) {
  const validation = PhoneValidation(user?.userData?.phone);

  return (
    <div className="col-span-6">
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
        {Translation("phone-number")}<Wildcard />
      </label>

      <input
        type="text"
        value={user?.userData?.phone}
        id="phone"
        maxLength="15"
        placeholder={Translation("phone-number-placeholder")}
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        onChange={(e) => e.target.value.match(/^[0-9+]*$/) && onInput("phone", e)}
      />

      {validations?.phone && validation?.error && <RequiredLabel message={validation?.message} />}
    </div>
  );
}
