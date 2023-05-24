import Link from "next/link";

import { Category } from "..";
import { Categories as AllCategories } from "../../../data";
import { Header } from "./";
import { Fragment } from "react";
import { Translation } from "../../../utils/Translations";

export default function Categories() {
  return (
    <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
      <Header />

      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="box-content py-2 relative overflow-x-auto overflow-y-auto touch-none">
            <div className="h-[400px] min-w-screen-xl flex xl:relative">
              {AllCategories.filter((category) => category.favorite)
                .slice(0, 5)
                .map((category, index) => (
                  <Fragment key={index}>
                    <Category category={category}  />
                  </Fragment>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] px-4 sm:px-6 flex mt-2 items-end justify-items-end lg:px-8 xl:px-0">
        <Link href="/kategorite">
          <a className="sm:hidden w-full text-sm text-end font-semibold text-[#377DFF] hover:text-[#377DFF70] sm:block">
            {Translation("explore-all-categories")} &rarr;
          </a>
        </Link>
      </div>
    </div>
  );
}
