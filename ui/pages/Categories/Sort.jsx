import { useState, useRef, useEffect } from "react";
import { OpenIcon } from "../../icons";
import { Translation } from "../../../utils/Translations";

export default function Sort({ ordering, setOrdering }) {
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
  const open = () => setIsSortOpen(!isSortOpen);

  return (
    <div ref={ref} className="relative inline-block text-left">
      <div>
        <button
          onClick={open}
          className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-all"
        >
            {Translation("sorting")}
          <OpenIcon />
        </button>
      </div>

      {isSortOpen && (
        <div className="w-56 origin-top-left absolute left-0 mt-2 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            <p
              style={ordering === "asc" ? { color: "#377DFF" } : {}}
              className="text-gray-500 font-medium block px-4 py-2 text-sm hover:cursor-pointer hover:text-gray-700"
              onClick={() => {
                setOrdering("asc");
                setIsSortOpen(false);
              }}
            >
              {Translation("sort-from-a-to-z")}
            </p>

            <p
              style={ordering === "desc" ? { color: "#377DFF" } : {}}
              className="text-gray-500 font-medium block px-4 py-2 text-sm hover:cursor-pointer hover:text-gray-700"
              onClick={() => {
                setOrdering("desc");
                setIsSortOpen(false);
              }}
            >
              {Translation("sort-from-z-to-a")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}