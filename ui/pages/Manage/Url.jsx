import { Translation } from "../../../utils/Translations";

export default function Url({product: { productData: { slug } }}) {
  const currentFullUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="col-span-6 sm:col-span-3 lg:col-span-3 pointer-events-none opacity-[.65]">
      <label htmlFor="link" className="block text-sm font-medium text-gray-700">
        {Translation("product-link")}
      </label>

      <input
        value={`${currentFullUrl}/${slug}`}
        type="text"
        id="link"
        disabled={true}
        placeholder={`${currentFullUrl}/${Translation("product-link-placeholder")}`}
        className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
      />
    </div>
  );
}
