import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductsList } from "../../../controllers/front";
import { Product, Loading, Empty } from "..";

export default function Products() {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pages);

  useEffect(() => {
    if (pages.Loaded === false) ProductsList(dispatch);
  }, [pages]);

  const currentRecords = pages?.Pages?.slice(0, 16);

  return (
    <div className="bg-white">
      <div className="max-w-2xl py-20 mx-auto mb-6 px-4 sm:py-18 lg:py-6 sm:max-w-5xl lg:max-w-7xl lg:px-8">
        <div className=" sm:flex sm:items-center sm:justify-between  lg:px-2 xl:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Shfleto Produktet e Fundit
          </h2>
          <a
            href="/produktet"
            className="hidden text-sm font-semibold text-[#377DFF] hover:text-[#377DFF70] sm:block"
          >
            Shfleto të gjitha Produktet<span> &rarr;</span>
          </a>
        </div>

        <div
          className={
            pages.Loaded
              ? pages.Pages.length === 0
                ? "w-full"
                : "mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 sm:space-x-2 lg:grid-cols-3 xl:grid-cols-4 pb-4 xl:gap-x-8 "
              : "w-full"
          }
        >
          {pages.Loaded === false ? (
            <Loading />
          ) : pages.Pages.length === 0 ? (
            <Empty
              heading="Nuk u gjet asnjë produkt"
              message="Nuk u gjet asnjë produkt i shtuar ne platformë."
            />
          ) : (
            currentRecords.map((page, index) => (
              <Product product={page} key={index} />
            ))
          )}
        </div>
        <div className="mt-6 px-4 sm:hidden mb-6 flex justify-end">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Shfleto të gjitha Produktet <span> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
