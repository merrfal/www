import Link from "next/link"

import { Categories as AllCategories } from "../../../data"
import { LogoIcon, OpenIcon} from "../../icons"
import { Search } from "./"
import { useState } from "react"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useRef } from "react"
import { Translation } from "../../../utils/Translations"
import { usePath } from "../../../hooks"

const categories = JSON.parse(JSON.stringify(AllCategories))

export default function InfoSide() {
  const router = useRouter()

  return (
    <div className="h-full w-full flex space-x-6 items-center align-center place-content-between lg:place-content-start ">
        <Link href="/">
          <span className="flex mr-2 hover:opacity-[.825] transition-all">
            <LogoIcon />
          </span>
        </Link>

      <Search />

      <div className="categories-container">
        <Categories router={router}/>
      </div>
    </div>
  )
}


const Categories = ({router}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)

  let clickOutside = (handler) => {
    let refInstance = useRef()

    useEffect(() => {
      let method = (e) => !refInstance.current?.contains(e.target) && handler()
      document.addEventListener("mousedown", method)
      return () => document.removeEventListener("mousedown", method)
    })

    return refInstance
  }

  let ref = clickOutside(() => setIsCategoryOpen(false))
  const open = () => setIsCategoryOpen(!isCategoryOpen)

  return (
    <div className="mobile-categories">
      <div ref={ref} className="relative inline-block text-left">
        <button onClick={open} className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-all">
          <span>{Translation("categories")}</span>
          <OpenIcon />
        </button>

        <CategoriesList 
          isCategoryOpen={isCategoryOpen} 
          setIsCategoryOpen={setIsCategoryOpen}
          router={router} 
          categories={categories} 
        />
      </div>
    </div>
  )
}

const CategoriesList = (props) => {
  const { isCategoryOpen, router, categories, setIsCategoryOpen } = props

  const activePathClasses = "hover:cursor-pointer ml-1 pr-6 text-sm font-medium text-[#377DFF] whitespace-nowrap transition-all ease-in-out duration-500"
  const inactivePathClasses = "hover:cursor-pointer ml-1 pr-6 text-sm font-medium whitespace-nowrap text-gray-600 transition-all whitespace-nowrap transition-all ease-in-out duration-500"

  if(isCategoryOpen) return (
    <div className="flex flex-col h-auto max-h-[257px] overflow-y-scroll absolute right-0 mt-3 bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none z-[999]">
      {categories?.map((category, index) => {
        const path = usePath(router, category.slug)
        
        return (
          <Link href={`/kategorite/${category.slug}`} onClick={() => setIsCategoryOpen(!isCategoryOpen)} key={index} className="flex p-1.5 items-center hover:cursor-pointer hover:bg-gray-50 transition-all ease-in-out duration-500">
            <span className={path ? activePathClasses : inactivePathClasses}>
              {category.name}
            </span>
          </Link>
        )
      })}
    </div>
  )
}