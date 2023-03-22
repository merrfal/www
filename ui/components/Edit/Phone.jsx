import { PhoneValidation } from "../../../utils/Forms";

export default function Phone({ user, setUser }) {
  const validation = PhoneValidation(user.userData.phone);

  return (
    <div className="col-span-6">
      <label
        htmlFor="phone"
        className="block text-sm font-medium text-gray-700"
      >
        Numri Telefonit
      </label>

      <input
        type="number"
        value={user.userData.phone}
        id="phone"
        maxlength="9"
        placeholder="Numri Telefonit"
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        onChange={(e) =>
          setUser({
            ...user,
            userData: { ...user.userData, phone: e.target.value },
          })
        }
      />

      {validation.error && (
        <p className="text-xs mt-1 ml-[1px] text-red-500">
          {validation.message}
        </p>
      )}
    </div>
  );
}
