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
            <div className="box-content py-2 relative overflow-visible">
           { // relative min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative px-0 xl:space-x-0 grid grid-cols-1 xl:grid xl:grid-cols-4 xl:gap-8
          }
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {AllCategories.map((c) => (
                      <Category category={c} key={c._id} kategori={true}/>
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
