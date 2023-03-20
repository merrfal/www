import { Normal } from "../../layouts";
import { Category } from "../../components";
import { Categories as AllCategories } from "../../../data";
import { Header } from ".";

export default function Categories() {
  return (
    <Normal>
      <div className="py-3 sm:py-8 xl:max-w-7xl xl:mx-auto xl:px-8">
        <Header />

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 relative overflow-x-auto xl:overflow-visible">
              <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-8">
                {AllCategories.map((c) => (
                  <Category category={c} key={c._id} />
                ))}
              </div>
              <p className="py-12 mt-8 text-center">ju keni aritur ne fund</p>
            </div>
          </div>
        </div>
      </div>
    </Normal>
  );
}
