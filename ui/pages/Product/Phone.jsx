import { PhoneIcon } from "../../icons";

export default function Phone({ productData }) {
  return (
    <form className="mt-6">
      
      <div className="mt-10 flex sm:flex-col justify-center">
        <button
          onClick={() => window.open(`tel:${productData?.phone?.includes("+") ? productData?.phone : `+${productData?.phone}`}`, "_self")}
          className="w-auto text-center flex-1 bg-[#387CFF] border border-transparent rounded-md p-3 px-8 flex justify-center items-center text-sm font-medium text-white hover:bg-[#4380f2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-[#387CFF] sm:w-full"
          style={{width: '60%'}}
        >
          <PhoneIcon style={{}} />
          Thirr në {productData?.phone?.includes("+") ? productData?.phone : `+${productData?.phone}`}
        </button>
      </div>
    </form>
  );
}
