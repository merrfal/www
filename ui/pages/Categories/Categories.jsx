import { Normal } from "../../layouts";
import { Category, End } from "../../components";
import { Categories as AllCategories } from "../../../data";
import { Header } from ".";

export default function Categories() {
  return (
    <Normal>
      <Header />
      <div className="py-3 sm:py8 xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 relative overflow-x-auto xl:overflow-visible">
              <div className="h-[400px] absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-4 xl:gap-8">
                {AllCategories.map((c) => (
                  <Category category={c} key={c._id} />
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
