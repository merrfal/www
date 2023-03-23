import { ModeValidation } from "../../../utils/Forms";

export default function Mode({
  product: {
    productData: { postedAnonymously },
  },
  onInput,
  validation: v,
}) {
  const validation = ModeValidation(postedAnonymously);

  return (
    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
      <label htmlFor="mode" className="block text-sm font-medium text-gray-700">
        A dëshironi ta postoni produktin si anonim?
      </label>
      <select
        id="mode"
        value={postedAnonymously}
        className="p-3 mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm"
        onChange={(e) => onInput("postedAnonymously", e)}
      >
        <option value={true}>Po (shfaq profilin tim tek produkti)</option>
        <option value={false}>
          Jo (mos e shfaq profilin tim tek produkti)
        </option>
      </select>

      {v.mode && validation.error && (
        <p className="text-xs mt-1 ml-[1px] text-red-500">
          {validation.message}
        </p>
      )}
    </div>
  );
}
