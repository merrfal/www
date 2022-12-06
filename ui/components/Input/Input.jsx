export default function Input(props) {
  const { label, value, values, setValues, placeholder, type, size } = props;

  if(size === "large"){
    return (
      <div>
        <label htmlFor={label} className='block text-sm font-medium text-gray-700'>
          {label}
        </label>
        <div className='mt-1'>
          <input
          
            type={type}
            id={label}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValues({ ...values, value: e.target.value })}
            className='py-3 px-4 block w-full shadow-sm focus:ring-[#387CFF] focus:border-[#387CFF] border-gray-300 rounded-md'
          />
        </div>
      </div>
    );
  }

  else return <p>soon</p>
}
