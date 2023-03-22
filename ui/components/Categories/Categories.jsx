import { Category } from "..";
import { Categories as AllCategories } from "../../../data";
import { Header } from "./";

export default function Categories() {
  return (
    <div className="py-16 sm:py-24 mb-12 xl:max-w-7xl xl:mx-auto xl:px-8">
      <Header />

      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="box-content py-2 relative overflow-x-auto xl:overflow-visible">
            <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-8">
              {AllCategories.filter((category) => category.favorite)
                .slice(0, 5)
                .map((c) => (
                  <Category category={c} key={c._id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
