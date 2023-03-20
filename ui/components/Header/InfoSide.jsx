import Link from "next/link";

import { Categories } from "../../../data";
import { LogoIcon } from "../../icons";

export default function InfoSide() {
  return (
    <div className="h-full flex space-x-6 items-center align-center">
      <Link href="/">
        <a className="flex mr-2">
          <LogoIcon />
        </a>
      </Link>

      {Categories.filter((category) => category.favorite)
        .slice(0, 6)
        .map((link) => (
          <Link href={`/kategorite/${link.slug}`}>
            <a className="flex mt-1 items-center text-sm font-medium text-gray-700 hover:text-gray-800">
              {link.name}
            </a>
          </Link>
        ))}
    </div>
  );
}
