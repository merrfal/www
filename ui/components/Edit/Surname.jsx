import { UserSurnameValidation } from "../../../utils/Forms";

export default function Surname({ user, onInput, validations }) {
  const validation = UserSurnameValidation(user.userData.surname);

  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor="surname"
        className="block text-sm font-medium text-gray-700"
      >
        Mbiemri
      </label>

      <input
        placeholder="surname"
        value={user.userData.surname}
        type="text"
        id="last-name"
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        onChange={(e) => onInput("surname", e)}
      />

      {validations.surname && validation.error && (
        <p className="text-xs mt-1 ml-[1px] text-red-500">
          {validation.message}
        </p>
      )}
    </div>
  );
}
