import { useState, useRef, useEffect } from "react"
import { Categories as AllCategories } from "../../../data"
import { OpenIcon } from "../../icons"
import { Translation } from "../../../utils/Translations"

export default function Categories({filters, setFilters}) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)

  let clickOutside = (handler) => {
    let refInstance = useRef()

    useEffect(() => {
      let method = (e) => !refInstance?.current?.contains(e?.target) && handler()
      document.addEventListener("mousedown", method)
      return () => document.removeEventListener("mousedown", method)
    })

    return refInstance
  }

  let ref = clickOutside(() => setIsCategoryOpen(false))
  const open = () => setIsCategoryOpen(!isCategoryOpen)


  return (
    <div ref={ref} className="px-4 relative inline-block text-left">
      <button onClick={open} className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-all">
          <span>
            {Translation("categories")}
          </span>
        <OpenIcon />
      </button>

      {isCategoryOpen && (
        <div className="origin-top-right max-h-[280px] overflow-scroll absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <form className="space-y-4">
            {AllCategories.map((category) => {
              return (
                <div key={category._id} className="flex select-none items-center hover:cursor-pointer hover:text-gray-500 transition-all">
                  <input
                    id={category._id}
                    value={category.name}
                    type="checkbox"
                    checked={filters.categories.includes(category._id)}
                    className="hover:cursor-pointer rounded-md h-4 w-4 border-gray-300 text-[#377DFF] focus:ring-[#377DFF]"
                    onChange={() => {}}
                    onClick={() => {
                      const alreadyAdded = filters.categories.includes(category._id)

                      if (!alreadyAdded) {
                        setFilters({...filters, categories: [...filters.categories, category._id]})
                      }

                      if (alreadyAdded) {
                        const updatedCategories = filters.categories.filter((cat) => cat !== category._id)
                        setFilters({...filters, categories: updatedCategories})
                      }
                    }}
                  />
                  
                  <label htmlFor={category._id} className="hover:cursor-pointer ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {category.name}
                  </label>
                </div>
              )
            })}
          </form>
        </div>
      )}
    </div>
  )
}