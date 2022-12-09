import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CategoryList } from "../../../controllers/front";
import { Category, Loading, Empty } from "..";

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    if (categories.Loaded === false) {
      CategoryList(dispatch);
    }
  }, [categories]);

  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Shfletoni Kategoritë
          </h2>
          <a href="/kategorite" className="hidden text-sm font-semibold text-[#377DFF] hover:text-[#377DFF70] sm:block">
            Shfleto të gjitha Kategoritë
            <span> &rarr;</span>
          </a>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
              <div className={categories.Loaded ? categories.Categories.length === 0 ? "w-full" : "absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8" : "w-full" }>
                {categories.Loaded === false ? (
                  <Loading />
                ) : categories.Categories.length === 0 ? (
                  <Empty
                    heading="Nuk u gjet asnjë kategori"
                    message="Nuk u gjet asnjë kategori e shtuar ne platformë."
                  />
                ) : (
                  categories.Categories.map((category, index) => <Category category={category} key={index} />)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
