import { Translation } from "../../../utils/Translations";

export default function Cities({
  product: { productData: { isGiven } },
  onInput,
}) {
  return (
    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
        {Translation("is-given")}
      </label>

      <select
        id="city"
        defaultValue={false}
        value={isGiven}
        onChange={(e) => onInput("isGiven", e)}
        className="p-3 mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm"
      >
          <option value={true}>{Translation("product-was-given")}</option>
          <option value={false}>{Translation("product-is-not-given")}</option>
      </select>
    </div>
  );
}
