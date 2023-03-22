import { UserNameValidation } from "../../../utils/Forms";

export default function Name({ user, setUser }) {
  const validation = UserNameValidation(user.userData.name)

  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Emri
      </label>
      
      <input
        type="text"
        id="name"
        placeholder="Emri"
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        value={user.userData.name}
        onChange={(e) =>
          setUser({
            ...user,
            userData: { ...user.userData, name: e.target.value },
          })
        }
      />

      {validation.error && <p className="text-xs mt-1 ml-[1px] text-red-500">{validation.message}</p>}
    </div>
  );
}
