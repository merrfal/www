export default function Phone({ product: { phone }, onInput }) {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
        Numri i telefonit
      </label>
      {/* <PhoneInput
                                defaultCountry="XK"
                                placeholder="+383 XX-XXX-XXX"
                                value={value}
                                onChange={setValue}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"/> */}
      <input
        onChange={(e) => onInput("phone", e)}
        maxlength="9"
        value={phone}
        type="tel"
        id="phone"
        placeholder="+383 - XX-XXX-XXX"
        className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
      />
    </div>
  );
}
