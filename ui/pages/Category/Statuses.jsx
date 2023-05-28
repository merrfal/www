import { useState, useRef, useEffect } from "react";
import { OpenIcon } from "../../icons";
import { Translation } from "../../../utils/Translations";

export default function Cities({ filters, setFilters }) {
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  let clickOutside = (handler) => {
    let refInstance = useRef();

    useEffect(() => {
      let method = (e) => !refInstance.current?.contains(e.target) && handler();
      document.addEventListener("mousedown", method);
      return () => document.removeEventListener("mousedown", method);
    });

    return refInstance;
  };

  let ref = clickOutside(() => setIsStatusOpen(false));
  const open = () => setIsStatusOpen(!isStatusOpen);

  return (
    <div ref={ref} className="px-4 relative inline-block text-left">
      <button
        onClick={open}
        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
      >
          <span>
            {Translation("status")}
          </span>
        <OpenIcon />
      </button>

      {isStatusOpen && (
        <div className="origin-top-right absolute max-h-[280px] overflow-auto right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <form className="space-y-4">
            <div className="flex items-center hover:cursor-pointer hover:text-gray-500 transition-all">
              <input
                id="given"
                value={true}
                type="radio"
                checked={filters.statuses.includes(true)}
                className="hover:cursor-pointer h-4 w-4 border-gray-300 text-[#377DFF] focus:ring-[#377DFF]"
                onClick={() => {
                    if (filters.statuses.includes(true)) {
                      let newStatuses = filters.statuses.filter((status) => status !== true);

                      setFilters({
                        ...filters,
                        statuses: newStatuses,
                      });
                    }

                    else {
                      setFilters({
                        ...filters,
                        statuses: [...filters.statuses, true],
                      });
                    }
                }}
              />
              <label
                htmlFor="given"
                className="hover:cursor-pointer ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
              >
                {Translation("given")}
              </label>
            </div>

            <div className="flex items-center hover:cursor-pointer hover:text-gray-500 transition-all">
              <input
                id="not-given"
                value={false}
                type="radio"
                checked={filters.statuses.includes(false)}
                className="hover:cursor-pointer h-4 w-4 border-gray-300 text-[#377DFF] focus:ring-[#377DFF]"
                onClick={() => {
                    if (filters.statuses.includes(false)) {
                      let newStatuses = filters.statuses.filter((status) => status !== false);

                      setFilters({
                        ...filters,
                        statuses: newStatuses,
                      });
                    }

                    else {
                      setFilters({
                        ...filters,
                        statuses: [...filters.statuses, false],
                      });
                    }
                  }
                }
              />
              <label
                htmlFor="not-given"
                className="hover:cursor-pointer ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
              >
                {Translation("not-given")}
              </label>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
