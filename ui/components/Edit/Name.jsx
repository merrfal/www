import { UserNameValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";
import { RequiredLabel, Wildcard } from "..";

export default function Name({ user, onInput, validations }) {
  const validation = UserNameValidation(user?.userData?.name);

  return (
    <div className="col-span-12 lg:col-span-3 flex flex-col justify-start items-start">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        {Translation("name")}<Wildcard />
      </label>

      <input
        type="text"
        id="name"
        placeholder={Translation("name-placeholder")}
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        value={user?.userData?.name}
        onChange={(e) => onInput("name", e)}
      />

      {validations?.name && validation?.error && <RequiredLabel message={validation?.message} />}
    </div>
  );
}
