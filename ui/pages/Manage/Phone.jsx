import { PhoneValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";
import { RequiredLabel, Wildcard } from "../../components";

export default function Phone({product, onInput, validation: v}) {
  const validation = PhoneValidation(product?.productData?.phone);

  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
        {Translation("phone-number")}<Wildcard />
      </label>

      <input 
        maxLength="13"
        value={product?.productData?.phone}
        type="text"
        id="phone"
        placeholder={Translation("phone-number-placeholder")}
        className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
        onChange={(e) => e.target.value.match(/^[0-9+]*$/) && onInput("phone", e)}
      />

      {v.phone && validation.error && <RequiredLabel message={validation.message} />}
    </div>
  );
}
