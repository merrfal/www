import Link from "next/link";
import { Translation } from "../../../utils/Translations";

export default function Header() {
  return (
    <div className=" sm:flex sm:items-center sm:justify-between  lg:px-2 xl:px-0">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
        {Translation("explore-products")}
      </h2>

      <Link href="/kerko">
        <a className="hidden text-sm font-semibold text-[#377DFF] hover:text-[#377DFF70] sm:block">
        {Translation("explore-all-products")} &rarr;
        </a>
      </Link>
    </div>
  );
}
