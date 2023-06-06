import Link from "next/link";
import { Translation } from "../../../utils/Translations";

export default function Buttons() {
  return (
    <div className="mt-6 space-x-4 flex justify-center">
        <Link href="/shto">
          <a className="flex items-center justify-center bg-[#377DFF] bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:bg-[#3073ee] transition-all">
            {Translation("give")}
          </a>
        </Link>


        <Link href="/kerko">
            <a className="flex items-center justify-center px-4 py-3  bg-origin-border border border-transparent text-base font-medium rounded-md shadow-sm text-[#377DFF] bg-indigo-50 hover:bg-indigo-100 transition-all">
              {Translation("explore")}
            </a>
        </Link>
    </div>
  );
}
