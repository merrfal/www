import { Categories as AllCategories } from "../../../data";

export default function Categories({ product: { category }, onInput }) {
  return (
    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
      <label htmlFor="c" className="block text-sm font-medium text-gray-700">
        Kategoria
      </label>
      <select
        onChange={(e) => onInput("category", e)}
        value={category}
        id="c"
        className="p-3 mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm"
      >
        {AllCategories.map((city) => (
          <option value={city._id}>{city.name}</option>
        ))}
      </select>
    </div>
  );
}
