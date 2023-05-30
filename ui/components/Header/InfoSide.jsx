import Link from "next/link";

import { Categories } from "../../../data";
import { LogoIcon, OpenIcon} from "../../icons";
import { Search } from "./";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Translation } from "../../../utils/Translations";

const categories = structuredClone(Categories);

export default function InfoSide() {
  const router = useRouter();

  return (
    <div className="h-full w-full flex space-x-6 items-center align-center place-content-between lg:place-content-start ">
      <Link href="/">
        <a className="flex mr-2">
          <LogoIcon />
        </a>
      </Link>

      <Search />

      <div className="h-5 border-r border-gray-200 mx-4 hidden lg:block" />
      {
        <div className="categories-container">
          <Desktop router={router} current={router.query.category} />
          <Mobile router={router} current={router.query.category} />
        </div>
        //qetu mi hek produktet duhet me bo diqka me z-index a naj sen me dal aj perpara
      }
    </div>
  );
}

const Desktop = () => {
  return (
    <div className="desktop-categories">
      <div className="h-full w-auto flex space-x-6 items-center align-center">
        {categories?.filter((category) => category.favorite)
          .slice(0, 8)
          .map((link, index) => (
            <Link key={index} href={`/kategorite/${link.slug}`}>
              <a className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                {link.name}
              </a>
            </Link>
          ))}

        <Link href={`/kategorite/`}>
          <a className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
            {`${Translation("all")} \u2192`}
          </a>
        </Link>
      </div>
    </div>
  );
};

const Mobile = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  let clickOutside = (handler) => {
    let refInstance = useRef();

    useEffect(() => {
      let method = (e) => !refInstance.current?.contains(e.target) && handler();
      document.addEventListener("mousedown", method);
      return () => document.removeEventListener("mousedown", method);
    });

    return refInstance;
  };

  let ref = clickOutside(() => setIsCategoryOpen(false));
  const open = () => setIsCategoryOpen(!isCategoryOpen)


  return (
    <div className="mobile-categories z-0">
      <div ref={ref} className="px-4 relative inline-block text-left">
        <button onClick={open} className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-all">
          <span>{Translation("categories")}</span>
          <OpenIcon />
        </button>

        {isCategoryOpen && (
          <div className="origin-top-right max-h-[280px] overflow-scroll absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <form className="space-y-4">
              {categories?.map((category, index) => {
                return (
                  <div key={index} className="flex items-center hover:cursor-pointer hover:text-gray-500 transition-all">
                    <Link href={`/kategorite/${category.slug}`}>
                      <a className="hover:cursor-pointer ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                        {category.name}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};


