

export default function Input(props) {
    const { label, value, values, setValues, placeholder, type, size } = props;
  
    if(size === "large"){
      return (
        <button
                  type='submit'
                  onClick={() => method}
                  className='w-auto bg-[#387CFF] inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-[#508DFF] focus:outline-none  transition-all'>
                 Dërgo Mesazhin
                </button>
      );
    }
    
    else return <p>soon</p>
  }
  