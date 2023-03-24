import { KosovoCities } from "../../../data";

export default function City({ user, onInput, validations }) {
  return (
    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
        Qyteti
      </label>

      <select
        value={user?.userAdditionalData?.city}
        id="city"
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        onChange={(e) => onInput("city", e, true, "userAdditionalData")}
      >
        {KosovoCities.map((c) => (
          <option key={c.value} value={c.value}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
