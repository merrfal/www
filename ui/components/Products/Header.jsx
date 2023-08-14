import Link from "next/link";
import { Translation } from "../../../utils/Translations";

export default function Header() {
  return (
    <div className="sm:flex sm:items-center sm:justify-between">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
        {Translation("explore-products")}
      </h2>

      <Link href="/kerko">
        <a className="text-sm font-semibold text-[#377DFF] hover:text-[#3073ee] transition-all">
          {Translation("explore-all-products")} &rarr;
        </a>
      </Link>
    </div>
  );
}
