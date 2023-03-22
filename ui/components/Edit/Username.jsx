import { UsernameValidation } from "../../../utils/Forms";

export default function Usernmae({ user, setUser }) {
  const validation = UsernameValidation(user.userData.username);

  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor="user" className="block text-sm font-medium text-gray-700">
        Emri unik
      </label>

      <input
        type="text"
        id="user"
        className="mt-1 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        placeholder="Emri unik"
        value={user.userData.username}
        onChange={(e) =>
          setUser({
            ...user,
            userData: {
              ...user.userData,
              username: e.target.value.toLowerCase(),
            },
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
