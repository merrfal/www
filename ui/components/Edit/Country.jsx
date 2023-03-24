export default function Country({ user }) {
  return (
    <div className="col-span-6 sm:col-span-6 opacity-60 lg:col-span-3">
      <label htmlFor="c" className="block text-sm font-medium text-gray-700">
        Shteti
      </label>

      <select
        value={user?.userAdditionalData?.country}
        disabled={true}
        id="c"
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
      >
        <option value={user?.userAdditional?.country}>Kosovë</option>
      </select>
    </div>
  );
}
