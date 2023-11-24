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
      <Filters 
        key="Categories"
        ordering={ordering} 
        setOrdering={setOrdering} 
      />
      
      <Global title={Translation("categories")} description={Translation("categories-description")} />

      <div className="max-w-7xl mx-auto mt-5 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="mt-4 overflow-x-hidden">
          <div className="-my-2 overflow-x-hidden">
            <div className="py-2 relative overflow-x-hidden">
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 overflow-x-hidden">
                {
                  AllCategories.sort((a, b) => 
                    {
                      if (ordering === "asc") return a.name.localeCompare(b.name);
                      else return b.name.localeCompare(a.name);
                    }
                  )

                  .map((category, index) => (
                    <Fragment key={index}>
                      <Category category={category} />
                    </Fragment>
                  ))
                }
              </div>

              <End show={true} />
            </div>
          </div>
        </div>
      </div>
    </Normal>
  );
}
