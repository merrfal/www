import Link from "next/link";
import { Translation } from "../../../utils/Translations";

export default function Buttons() {
  return (
    <div className="mt-6 space-x-4 flex justify-center">
      <Link href="/shto">
        <a>
          <button className="flex items-center justify-center bg-[#377DFF] from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700 transition-all">
            {Translation("give")}
          </button>
        </a>
      </Link>

      <Link href="/kerko">
        <a>
          <button className="flex items-center justify-center px-4 py-3  bg-origin-border border border-transparent text-base font-medium rounded-md shadow-sm text-[#377DFF] bg-indigo-50 hover:bg-indigo-100 transition-all">
            {Translation("explore")}
          </button>
        </a>
      </Link>
    </div>
  );
}
