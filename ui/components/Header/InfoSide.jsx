import Link from "next/link";

import { Categories } from "../../../data";
import { LogoIcon, OpenIcon} from "../../icons";
import { Search } from "./";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Translation } from "../../../utils/Translations";
import { usePath } from "../../../hooks";

const categories = JSON.parse(JSON.stringify(Categories));
const activePathClasses = "flex items-center text-sm font-medium text-[#377DFF] transition-all";
const inactivePathClasses = "flex items-center text-sm font-medium text-gray-700 hover:text-[#377DFF] transition-all";

export default function InfoSide() {
  const router = useRouter();

  return (
    <div className="h-full w-full flex space-x-6 items-center align-center place-content-between lg:place-content-start ">
        <Link href="/">
          <a className="flex mr-2 hover:opacity-[.825] transition-all">
            <LogoIcon />
          </a>
        </Link>

      <Search />

      <div className="h-5 border-r border-gray-200 mx-4 hidden lg:block" />
      {
        <div className="categories-container">
          <Desktop router={router} />
          <Mobile router={router}/>
        </div>
        //qetu mi hek produktet duhet me bo diqka me z-index a naj sen me dal aj perpara
      }
    </div>
  );
}

const Desktop = ({router}) => {
  const allPath = {
    all: usePath(router, "kategorite", 1),
    others: false
  }

  return (
    <div className="desktop-categories">
      <div className="h-full w-auto flex space-x-6 items-center align-center">
        {categories?.filter((category) => category.favorite)
          .slice(0, 8)
          .map((link, index) => {
            const path = usePath(router, link.slug);

            if(path) allPath.others = true;
          
            return (
            <Link key={index} href={`/kategorite/${link.slug}`}>
              <a className={path ? activePathClasses : inactivePathClasses}>
                {link.name}
              </a>
            </Link>
            )
          }
        )}

          <Link href="/kategorite/">
            <a className={allPath.all && !allPath.others ? activePathClasses : inactivePathClasses}>
              {Translation("all")}
            </a>
          </Link>
      </div>
    </div>
  );
};

const Mobile = ({router}) => {
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
                const path = usePath(router, category.slug);

                return (
                  <div key={index} className="flex items-center hover:cursor-pointer hover:text-[#377DFF] transition-all">
                    <Link href={`/kategorite/${category.slug}`}>
                      <span className={path ? "hover:cursor-pointer ml-3 pr-6 text-sm font-medium text-gray-700 whitespace-nowrap" : "hover:cursor-pointer ml-3 pr-6 text-sm font-medium whitespace-nowrap text-[#377DFF] transition-all"} onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                        {category.name}
                      </span>
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


