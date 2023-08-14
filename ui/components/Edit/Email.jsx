import { RequiredLabel, Wildcard }from "../";
import { EmailValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";

export default function Email({ user, onInput, validations }) {
  const validation = EmailValidation(user?.userData?.email);

  return (
    <div className="col-span-12 lg:col-span-3 flex flex-col justify-start items-start opacity-50 pointer-events-none">
      <label htmlFor="email" className="relative block text-sm font-medium text-gray-700">
        {Translation("email")}<Wildcard />
      </label>

      <input
        type="text"
        id="email"
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        placeholder={Translation("email-placeholder")}
        disabled={true}
        onChange={(e) => onInput("email", e)}
        value={user?.userData?.email}
      />

      {validations?.name && validation?.error && <RequiredLabel message={validation?.message} />}
    </div>
  );
}