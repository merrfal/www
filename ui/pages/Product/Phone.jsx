import { PhoneIcon } from "../../icons";

export default function Phone({ productData }) {
  return (
    <form className="mt-6">
      <div className="mt-10 flex sm:flex-col1">
        <button
          onClick={() => window.open(`tel:${productData.phone}`, "_self")}
          className="max-w-xs justify-between flex-1 bg-[#387CFF] border border-transparent rounded-md py-3 px-8 flex items-center text-base font-medium text-white hover:bg-[#4380f2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-[#387CFF] sm:w-full"
        >
          <PhoneIcon />
          Thirr në {productData.phone}
        </button>
      </div>
    </form>
  );
}
