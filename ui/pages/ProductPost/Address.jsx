export default function Address({ product: { address }, onInput }) {
  return (
    <div className="col-span-6">
      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
        Adresa e marrjes
      </label>
      <input
        type="text"
        id="address"
        onChange={(e) => onInput("address", e)}
        value={address}
        placeholder="Rruga Adem Jashari, Nr 00, Prishtine"
        className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
      />
    </div>
  );
}
