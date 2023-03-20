export default function Title({ product: { title }, onInput }) {
  return (
    <div className="col-span-6 sm:col-span-4">
      <label htmlFor="title" className="block text-sm font-medium text-gray-700">
        Emri i produktit
      </label>
      <input
        onChange={(e) => onInput("title", e)}
        value={title}
        type="text"
        id="title"
        placeholder="Jakne për fëmijë"
        className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
      />
    </div>
  );
}
