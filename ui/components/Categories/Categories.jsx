import { Category } from "..";
import { Categories as AllCategories } from "../../../data";
import { Header } from "./";
import { Fragment } from "react";

export default function Categories() {
  return (
    <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
      <Header />

      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="box-content py-2 relative overflow-x-auto overflow-y-auto touch-none">
            <div className="h-[400px] min-w-screen-xl flex xl:relative">
              {
                AllCategories.filter((category) => category.favorite)
                .slice(0, 5)
                .map((category, index) => (
                  <Fragment key={index}>
                    <Category category={category}  />
                  </Fragment>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
