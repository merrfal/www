import { Wildcard }from "../";
import { Translation } from "../../../utils/Translations";

export default function Email({ user }) {
  return (
    <div className="col-span-6 sm:col-span-3 opacity-50 pointer-events-none">
      <label htmlFor="email" className="relative block text-sm font-medium text-gray-700">
        {Translation("email")}<Wildcard />
      </label>

      <input
        type="text"
        id="email"
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        placeholder={Translation("email")}
        disabled={true}
        value={user?.userData?.email}
      />
    </div>
  );
}
