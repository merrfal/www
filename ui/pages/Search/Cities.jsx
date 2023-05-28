import { useState, useRef, useEffect } from "react";
import { KosovoCities } from "../../../data";
import { OpenIcon } from "../../icons";
import { Translation } from "../../../utils/Translations";

export default function Cities({ filters, setFilters }) {
  const [isCityOpen, setIsCityOpen] = useState(false);

  let clickOutside = (handler) => {
    let refInstance = useRef();

    useEffect(() => {
      let method = (e) => !refInstance.current?.contains(e.target) && handler();
      document.addEventListener("mousedown", method);
      return () => document.removeEventListener("mousedown", method);
    });

    return refInstance;
  };

  let ref = clickOutside(() => setIsCityOpen(false));
  const open = () => setIsCityOpen(!isCityOpen);

  return (
    <div ref={ref} className="px-4 relative inline-block text-left">
      <button
        onClick={open}
        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
      >
          <span>
            {Translation("cities")}
          </span>
        <OpenIcon />
      </button>

      {isCityOpen && (
        <div className="origin-top-right absolute max-h-[280px] overflow-auto right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <form className="space-y-4">
          {KosovoCities.map((city, index) => {
              return (
                <div key={index} className="flex items-center hover:cursor-pointer hover:text-gray-500 transition-all">
                  <input
                    id="city"
                    value={city.value}
                    type="radio"
                    checked={filters.cities.includes(city.value)}
                    className="hover:cursor-pointer h-4 w-4 border-gray-300 text-[#377DFF] focus:ring-[#377DFF]"
                    onClick={() => setFilters({...filters, cities: [...filters.cities, city.value]})}
                  />
                  
                  <label htmlFor="city" className="hover:cursor-pointer ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {city.name}
                  </label>
                </div>
              );
            })}
          </form>
        </div>
      )}
    </div>
  );
}
