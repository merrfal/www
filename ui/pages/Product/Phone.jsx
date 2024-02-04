import { Translation } from "../../../utils/Translations"
import { PhoneIcon, ViberIcon } from "../../icons"
import WhatsAppIcon from "../../icons/WhatsAppIcon"

export default function Phone({ productData }) {
  return (
    <form className="mt-6 w-full flex justify-start">
      <div className="mt-10 flex items-center justify-center gap-1">
        <a
          href={`tel:${productData?.phoneCode}${productData?.phone}`}
          target="_blank"
          className="w-auto text-center whitespace-nowrap flex-1 bg-[#387CFF] border border-transparent rounded-md p-3 px-8 flex justify-center items-center text-sm font-medium text-white hover:bg-[#4380f2] focus:outline-none sm:w-full cursor-pointer transition-all"
        >
          <PhoneIcon />
          
          {Translation("call-to")}
        </a>

        <a
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=${productData?.phoneCode?.replace('+', '')}${productData?.phone}`}
          className="w-12 flex-1 bg-[#25D366] border border-transparent rounded-md p-3 flex justify-center text-sm font-medium text-white hover:bg-[#26c661] focus:outline-none sm:w-full cursor-pointer transition-all"
        >
          <WhatsAppIcon />

          {/* {Translation("call-to")} */}
        </a>

        {/* <a
          target="_blank"
          href={`https://api.viber.com/send?phone=${productData?.phoneCode?.replace('+', '')}${productData?.phone}`}
          className="w-auto flex-1 bg-[#7360F2] border border-transparent rounded-md p-3 flex justify-center items-center text-sm font-medium text-white hover:bg-[#5c4bc6] focus:outline-none sm:w-full cursor-pointer transition-all"
        >
          <ViberIcon />
        </a> */}
      </div>
    </form>
  )
}