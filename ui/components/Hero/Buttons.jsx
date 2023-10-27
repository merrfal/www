import Link from "next/link";
import { Translation } from "../../../utils/Translations";

export default function Buttons() {
  return (
    <div className="mt-8 max-w-md mx-10 sm:max-w-none sm:flex sm:justify-center">
      <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
        <Link href="/shto"> 
            <span className="flex items-center mb-3 xl:mb-0 lg:mb-0 justify-center w-full px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#33333] bg-white hover:bg-indigo-50 hover:cursor:pointer transition-all md:py-4 md:px-8">
              {Translation("give")}
            </span>
        </Link>

        
        <Link href="/kerko">
          <span className="flex items-center justify-center w-full px-4 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-opacity-50 hover:bg-opacity-70 hover:cursor:pointer hover:bg-[#ffffff05] transition-all md:py-4 md:px-8">
            {Translation("explore")}
          </span>
        </Link>
      </div>
    </div>
  );
}
