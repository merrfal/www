import { Normal } from "../../layouts";
import { Category, End } from "../../components";
import { Categories as AllCategories } from "../../../data";
import { Header, Filters } from "./";
import { useState } from "react";

export default function Categories() {
  const [ordering, setOrdering] = useState("asc");

  return (
    <Normal>
      <Header />
      <Filters ordering={ordering} setOrdering={setOrdering} />

      <div className="py-3 sm:py8 xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 relative overflow-x-auto xl:overflow-visible">
              <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-8">
                {AllCategories.sort((a, b) => {
                  if (ordering === "asc") return a.name.localeCompare(b.name);
                  else return b.name.localeCompare(a.name);
                }).map((category) => (
                  <Category key={category.id} category={category} />
                ))}
              </div>
              <End />
            </div>
          </div>
        </div>
      </div>
    </Normal>
  );
}
