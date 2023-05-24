import { Normal } from "../../layouts";
import { Category, End } from "../../components";
import { Categories as AllCategories } from "../../../data";
import { Header, Filters } from "./";
import { Fragment, useState } from "react";
import { Global } from "../../../configs/Head";
import { Translation } from "../../../utils/Translations";

export default function Categories() {
  const [ordering, setOrdering] = useState("asc");

  return (
    <Normal>
      <Header />

      <Filters ordering={ordering} setOrdering={setOrdering} />

      <Global 
        title={Translation("categories")} 
        description={Translation("categories-description")}  
      />

      <div className="py-3 sm:py8 xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 relative overflow-visible">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {AllCategories.sort((a, b) => {
                  if (ordering === "asc") return a.name.localeCompare(b.name);
                  else return b.name.localeCompare(a.name);
                }).map((category, index) => (
                  <Fragment key={index}>
                    <Category category={category} />
                  </Fragment>
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
