export default function Description({ product: { description }, onInput }) {
  return (
    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
        Përshkrimi i produktit
      </label>
      <div className="mt-1">
        <textarea
          onChange={(e) => onInput("description", e)}
          value={description}
          id="description"
          placeholder="Përshkrimi i gjatë i produktit tuaj, me të gjitha karakteristikat."
          rows="7"
          className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
        />
      </div>
    </div>
  );
}
