import Link from "next/link";

import { Categories } from "../../../data";
import { LogoIcon } from "../../icons";
import { Search } from "./";

export default function InfoSide() {
  return (
    <div className="h-full w-auto flex space-x-6 items-center align-center">
      <Link href="/">
        <a className="flex mr-2">
          <LogoIcon />
        </a>
      </Link>

      <Search />

      <div className="h-5 border-r border-gray-200 mx-4" />

      {Categories.filter((category) => category.favorite)
        .slice(0, 8)
        .map((link) => (
          <Link href={`/kategorite/${link.slug}`}>
            <a className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
              {link.name}
            </a>
          </Link>
        ))}
    </div>
  );
}
