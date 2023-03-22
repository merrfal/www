import { KosovoCities } from "../../../data";

export default function Cities({ product: { city }, onInput }) {
  return (
    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
        Qyteti
      </label>
      <select
        defaultValue={"Përcakto qytetin"}
        value={city}
        onChange={(e) => onInput("city", e)}
        id="city"
        className="p-3 mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm"
      >
        {KosovoCities.map((city) => (
          <option value={city.value}>{city.name}</option>
        ))}
      </select>
    </div>
  );
}
