import Link from "next/link";
import { Translation } from "../../../utils/Translations";

export default function Header() {
  return (
    <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
        {Translation("explore-categories")}
      </h2>

      <Link href="/kategorite">
        <a className="text-sm font-semibold text-[#377DFF] hover:text-[#3073ee] transition-all">
          {Translation("explore-all-categories")} &rarr;
        </a>
      </Link>
    </div>
  );
}
