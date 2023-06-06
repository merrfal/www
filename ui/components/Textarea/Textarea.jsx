export default function Textarea(props) {
  const { label, value, values, setValues, placeholder, type, size } = props;

  if (size === "large") {
    return (
      <div className="sm:col-span-2">
        <label
          htmlFor={label}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        
        <div className="mt-1">
          <textarea
            type={type}
            id={label}
            placeholder={placeholder}
            value={value}
            rows="4"
            onChange={(e) => setValues({ ...values, value: e.target.value })}
            className="py-3 px-4 block w-full shadow-sm focus:ring-[#387CFF] focus:border-[#387CFF] border border-gray-300 rounded-md"
          />
        </div>
      </div>
    );
  } else return <></>;
}
