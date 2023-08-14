import { Translation } from "../../../utils/Translations";
import { PhoneIcon } from "../../icons";

export default function Phone({ productData }) {
  return (
    <form className="mt-6">
      <div className="mt-10 flex sm:flex-col justify-center">
        <a
          href={`tel:${productData?.phone?.includes("+") ? productData?.phone : productData?.phone}`}
          target="_self"
          className="w-auto text-center flex-1 bg-[#387CFF] border border-transparent rounded-md p-3 px-8 flex justify-center items-center text-sm font-medium text-white hover:bg-[#4380f2] focus:outline-none sm:w-full cursor-pointer transition-all"
          style={{width: '50%'}}
        >
          <PhoneIcon />
          
          {Translation("call-to")} {productData?.phone?.includes("+") ? productData?.phone : `+${productData?.phone}`}
        </a>
      </div>
    </form>
  );
}