import { Category } from "..";
import { Categories as AllCategories } from "../../../data";
import { Header } from "./";
import { Fragment } from "react";

export default function Categories() {
  return (
    <div className="max-w-2xl mx-auto lg:mb-16 xl:mb-16 px-4 sm:max-w-5xl lg:max-w-7xl lg:px-8">
      <Header />

      <div className="flow-root">
        <div className="py-3 box-content relative overflow-x-auto overflow-y-auto touch-none">
            <div className="h-[400px] min-w-screen-xl flex xl:relative gap-4">
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
  );
}
