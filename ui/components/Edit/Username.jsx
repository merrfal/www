import { UsernameValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";
import { Wildcard, RequiredLabel } from "../";

export default function Usernmae({ user, validations, onInput}) {
  const validation = UsernameValidation(user?.userData?.username);

  return (
    <div className="col-span-6 sm:col-span-3 ">
      <label htmlFor="username" className="block text-sm font-medium text-gray-700">
        {Translation("username")}<Wildcard />
      </label>

      <input
        type="text"
        id="username"
        className="mt-1 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        placeholder={Translation("username-placeholder")}
        value={user?.userData?.username}
        onChange={(e) => onInput("username", e, true, "userData")}
      />

      {validations?.username && validation?.error && <RequiredLabel message={validation?.message} />}
    </div>
  );
}
