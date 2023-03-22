import { AddressValidation } from "../../../utils/Forms";

export default function Address({ user, setUser }) {
  const validation = AddressValidation(user.userData.address);

  return (
    <div className="col-span-6">
      <label htmlFor="a" className="block text-sm font-medium text-gray-700">
        Adresa
      </label>

      <input
        type="text"
        placeholder="Adresa"
        value={user.userData.address}
        id="a"
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        onChange={(e) =>
          setUser({
            ...user,
            userData: { ...user.userData, address: e.target.value },
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
