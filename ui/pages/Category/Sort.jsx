import { useState, useRef, useEffect } from "react";
import { OpenIcon } from "../../icons";

export default function Sort({filters, setFilters}) {
  const [isSortOpen, setIsSortOpen] = useState(false);

  let clickOutside = (handler) => {
    let refInstance = useRef();

    useEffect(() => {
      let method = (e) => !refInstance.current?.contains(e.target) && handler();
      document.addEventListener("mousedown", method);
      return () => document.removeEventListener("mousedown", method);
    });

    return refInstance;
  };

  let ref = clickOutside(() => setIsSortOpen(false));
  const open = () => setIsSortOpen(!isSortOpen)

  return (
    <div ref={ref} className="relative inline-block text-left">
      <div>
        <button onClick={open} className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
          Renditja
          <OpenIcon />
        </button>
      </div>

      {isSortOpen && (
        <div className="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            <p
              style={filters.sort.createdAt === 1 ? { color: "#377DFF" } : {}}
              onClick={() => setFilters({...filters, sort: {createdAt: 1}})}
              className="text-gray-500 font-medium block px-4 py-2 text-sm hover:cursor-pointer hover:text-gray-700"
            >
              Më popullorja
            </p>

            <p
              style={filters.sort.createdAt === -1 ? { color: "#377DFF" } : {}}
              onClick={() => setFilters({...filters, sort: {createdAt: -1}})}
              className="text-gray-500 font-medium block px-4 py-2 text-sm hover:cursor-pointer hover:text-gray-700"
            >
              Më jo popullorja
            </p>

            <p
              style={filters.sort.views === 1 ? { color: "#377DFF" } : {}}
              onClick={() => setFilters({...filters, sort: {views: 1}})}
              className="text-gray-500 font-medium block px-4 py-2 text-sm hover:cursor-pointer hover:text-gray-700"
            >
              Më të rejat
            </p>

            <p
              style={filters.sort.views === -1 ? { color: "#377DFF" } : {}}
              onClick={() => setFilters({...filters, sort: {views: -1}})}
              className="text-gray-500 font-medium block px-4 py-2 text-sm hover:cursor-pointer hover:text-gray-700"
            >
              Më të vjetërat
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
