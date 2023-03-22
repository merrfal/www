import { SmCloseIcon } from "../../icons";

export default function Filtering() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-3 flex items-center px-6 lg:px-8 align-center">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Filtrat
        </h3>

        <div className="w-px h-5 bg-gray-300 block ml-4" />

        <div className="ml-4 flex overflow-x-auto">
          <div className="flex flex-wrap items-center mr-1">
            <span className="inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900">
              <span>qeqe</span>
              <button
                className="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                //   onClick={(e) => {
                //     e.preventDefault();
                //     dispatch(SetCategory(category));
                //     setCurrentPage(1);
                //   }}
              >
                <SmCloseIcon />
              </button>
            </span>
          </div>
          <div className="flex flex-wrap items-center mr-1">
            <span className="inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900">
              <span>qweqwe</span>
              <button
                className="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                //   onClick={(e) => {
                //     e.preventDefault();
                //     dispatch(SetCity(city));
                //     setCurrentPage(1);
                //   }}
              >
                <SmCloseIcon />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
