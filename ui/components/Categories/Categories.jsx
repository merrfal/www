import { Category } from "..";
import { Categories as AllCategories } from "../../../data";
import { Header } from "./";
import { Fragment } from "react";

export default function Categories() {
  return (
    <div className="mx-auto lg:mb-16 xl:mb-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <Header />

      <div className="flow-root relative py-3">
        <div 
          style={{ background: `linear-gradient(270deg, #ffffff90 0%, #ffffff00 100%)` }}
          className="w-80 h-full absolute top-0 right-0 z-[9999] pointer-events-none" 
        />

        <div className="box-content relative overflow-x-auto overflow-y-auto">
            <div className="h-[400px] min-w-screen-xl flex xl:relative gap-4">
              {
                AllCategories.filter((category) => category.favorite)
                .slice(0, 6)
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
