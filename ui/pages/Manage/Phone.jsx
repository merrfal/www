import { PhoneValidation } from "../../../utils/Forms";

export default function Phone({
  product: {
    productData: { phone },
  },
  onInput,
  validation: v,
}) {
  const validation = PhoneValidation(phone);

  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor="phone"
        className="block text-sm font-medium text-gray-700"
      >
        Numri i telefonit
      </label>

      <input 
        maxLength="13"
        value={phone}
        type="text"
        id="phone"
        placeholder="+383 - XX-XXX-XXX"
        className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
        onChange={(e) => {
          if (e.target.value.match(/^[0-9+]*$/)) {
            onInput("phone", e);
          }
        }}
      />

      {v.phone && validation.error && (
        <p className="text-xs mt-1 ml-[1px] text-red-500">
          {validation.message}
        </p>
      )}
    </div>
  );
}
