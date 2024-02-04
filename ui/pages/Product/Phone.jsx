import { Translation } from "../../../utils/Translations"
import { PhoneIcon, WhatsAppIcon } from "../../icons"

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
        </a>
      </div>
    </form>
  )
}