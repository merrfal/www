import { useEffect, useState, useRef } from "react";
import { Normal } from "../../layouts";
import { Product, Empty, Loading } from "../../components";
import { OpenIcon, CloseIcon, SmCloseIcon } from "../../icons";
import { KosovoCities } from "../../../data";
import { ProductsFront } from "../../../controllers/Category";
import { Categories } from "../../../data"
import { Global } from "../../../configs/Head";

export default function Search() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

  let clickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
      let maybeHandler = (event) => !domNode.current?.contains(event.target) && handler();
      document.addEventListener("mousedown", maybeHandler);
      return () => document.removeEventListener("mousedown", maybeHandler);
    });

    return domNode;
  };

  let domNodeCategory = clickOutside(() => setIsCategoryOpen(false));
  let domNodeCity = clickOutside(() => setIsCityOpen(false));
  let domNodeSort = clickOutside(() => setIsSortOpen(false));

  const filter = {Categories: [], Cities: [], Sort: ""};

  return (
    <Normal>
      <Global name="kerko produkte" description="name" />

      <div className="bg-white">
        {/* {menuMobileOpen && (
          <div className="fixed inset-0 flex z-40 sm:hidden ">
            <div
              onClick={() => setMenuMobileOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-25"
            />
            <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Filtrat</h2>
                <button className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400">
                  <CloseIcon />
                </button>
              </div>

              <form className="mt-4">
                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <button className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400">
                      <span className="font-medium text-gray-900">
                        Kategoritë
                      </span>
                    </button>
                  </h3>
                  <div className="pt-6" id="filter-section-0">
                    <div className="space-y-6">
                      {Categories.map((category, index) => {
                          return (
                            <div className="flex items-center hover:cursor-pointer hover:text-gray-500 transition-all">
                              <input
                                key={index}
                                id={index}
                                value={category.name}
                                onClick={(e) => {
                                  e.preventDefault();
                                  dispatch(SetCategory(category.name));
                                  setCurrentPage(1);
                                }}
                                type="checkbox"
                                // checked={filter.Categories.includes(
                                //   category.Name
                                // )}
                                className="hover:cursor-pointer h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={index}
                                className="hover:cursor-pointer ml-3 text-sm text-gray-500"
                              >
                                {category.name}
                              </label>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <button className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400">
                      <span className="font-medium text-gray-900">Qytetet</span>
                    </button>
                  </h3>
                  <div className="pt-6" id="filter-section-2">
                    <div className="space-y-6">
                      {KosovoCities.map((city, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center hover:cursor-pointer hover:text-gray-500 transition-all"
                          >
                            <input
                              id={city.name}
                              value={city.name}
                              type="checkbox"
                              // checked={filter.Cities.includes(city)}
                              className="hover:cursor-pointer h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={city.name}
                              className="hover:cursor-pointer ml-3 text-sm text-gray-500"
                            >
                              {city.name}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )} */}

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Të gjitha Produktet
          </h1>
          <p className="mt-4 max-w-xl text-sm text-gray-700">
            Shfletoni të gjitha kategoritë, qytetet si dhe statuset e produkteve
            të dhuruara nga dhuruesit publik dhe anonim, dhe zgjedhni atë që ju
            keni nevojë.
          </p>
        </div>

        <section>
          <div className="relative z-10 bg-white border-b border-gray-200 pb-4">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
              <div
                ref={domNodeSort}
                className="relative inline-block text-left"
              >
                <div>
                  <button
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                    id="menu-button"
                  >
                    Sortimi
                    <OpenIcon />
                  </button>
                </div>

                {isSortOpen && (
                  <div className="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div>
                      <p
                        style={
                          filter.Sort === "popular"
                            ? { color: "rgb(24 24 27)" }
                            : {}
                        }
                        onClick={() => dispatch(SetSort("popular"))}
                        className={`text-gray-500 font-medium block px-4 py-2 text-sm hover:cursor-pointer hover:text-gray-700`}
                      >
                        Më popullorja
                      </p>

                      <p
                        style={
                          filter.Sort === "unpopular"
                            ? { color: "rgb(24 24 27)" }
                            : {}
                        }
                        onClick={() => dispatch(SetSort("unpopular"))}
                        className={`text-gray-500 block px-4 py-2 text-sm hover:cursor-pointer hover:text-gray-700`}
                      >
                        Më jo popullorja
                      </p>

                      <p
                        style={
                          filter.Sort === "newest"
                            ? { color: "rgb(24 24 27)" }
                            : {}
                        }
                        onClick={() => dispatch(SetSort("newest"))}
                        className={`text-gray-500 block px-4 py-2 text-sm hover:cursor-pointer hover:text-gray-700`}
                      >
                        Më të rejat
                      </p>

                      <p
                        style={
                          filter.Sort === "oldest"
                            ? { color: "rgb(24 24 27)" }
                            : {}
                        }
                        onClick={() => dispatch(SetSort("oldest"))}
                        className={`text-gray-500 block px-4 py-2 text-sm hover:cursor-pointer hover:text-gray-700`}
                      >
                        Më te vjetrat
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => setMenuMobileOpen(!menuMobileOpen)}
                className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
              >
                Filtrat
              </button>

              <div className="hidden sm:block">
                <div className="flow-root">
                  <div className="-mx-4 flex items-center divide-x divide-gray-200">
                    <div
                      ref={domNodeCategory}
                      className="px-4 relative inline-block text-left"
                    >
                      <button
                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                      >
                        <span>Kategoritë</span>
                        <OpenIcon />
                      </button>

                      {isCategoryOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form className="space-y-4">
                            {categories.Loaded === true &&
                              categories.Categories.map((category, index) => {
                                return (
                                  <div
                                    key={index}
                                    className="flex items-center hover:cursor-pointer hover:text-gray-500 transition-all"
                                  >
                                    <input
                                      id={index}
                                      value={category.Name}
                                      type="radio"
                                      // checked={filter.Categories.includes(
                                      //   category.Name
                                      // )}
                                      className="hover:cursor-pointer h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(SetCategory(category.Name));
                                        setCurrentPage(1);
                                      }}
                                    />
                                    <label
                                      htmlFor={index}
                                      className="hover:cursor-pointer ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                                    >
                                      {category.Name}
                                    </label>
                                  </div>
                                );
                              })}
                          </form>
                        </div>
                      )}
                    </div>

                    <div
                      ref={domNodeCity}
                      className="px-4 relative inline-block text-left"
                    >
                      <button
                        onClick={() => setIsCityOpen(!isCityOpen)}
                        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                      >
                        <span>Qytetet</span>
                        <OpenIcon />
                      </button>

                      {isCityOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form className="space-y-4">
                            {Cities.map((city, index) => {
                              return (
                                <div
                                  key={index}
                                  className="flex items-center hover:cursor-pointer hover:text-gray-500 transition-all"
                                >
                                  <input
                                    id={city}
                                    value={city}
                                    type="radio"
                                    checked={filter.Cities.includes(city)}
                                    className="hover:cursor-pointer h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      dispatch(SetCity(city));
                                      setCurrentPage(1);
                                    }}
                                  />
                                  <label
                                    htmlFor={city}
                                    className="hover:cursor-pointer ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                                  >
                                    {city}
                                  </label>
                                </div>
                              );
                            })}
                          </form>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-3 flex items-center px-6 lg:px-8 align-center">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Filtrat
              </h3>

              <div className="w-px h-5 bg-gray-300 block ml-4" />

              <div className="ml-4 flex overflow-x-auto">
                {filter.Categories.map((category, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-wrap items-center mr-1"
                    >
                      <span className="inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900">
                        <span>{category}</span>
                        <button
                          className="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(SetCategory(category));
                            setCurrentPage(1);
                          }}
                        >
                          <SmCloseIcon />
                        </button>
                      </span>
                    </div>
                  );
                })}

                {filter.Cities.map((city, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-wrap items-center mr-1"
                    >
                      <span className="inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900">
                        <span>{city}</span>
                        <button
                          className="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(SetCity(city));
                            setCurrentPage(1);
                          }}
                        >
                          <SmCloseIcon />
                        </button>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div
          // className={
          //   pages.Loaded === false
          //     ? "w-full"
          //     : pages.Pages.length === 0
          //     ? "w-full"
          //     : "mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
          // }
        >
          {/* {pages.Loading === true || filter.Loading === true ? (
            <Loading />
          ) : pages.Pages.length === 0 ||
            filter.Results.length === 0 ||
            currentRecords.length === 0 ? (
            <Empty
              heading="Nuk u gjet asnjë produkt"
              message="Nuk u gjet asnjë produkt në platformë me këto filtrime.."
            />
          ) : (
            currentRecords?.map((page, index) => {
              if (page !== undefined)
                return <Product product={page} key={index} />;
            })
          )} */}
        </div>
      </div>
    </Normal>
  );
}
