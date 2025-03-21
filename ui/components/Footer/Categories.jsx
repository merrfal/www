import Link from "next/link"

import { Categories as AllCategories } from "../../../data"
import { Translation } from "../../../utils/Translations"
import { usePath } from "../../../hooks"
import { useRouter } from "next/router"
import { Fragment } from "react"

export default function Categories() {
  const router = useRouter()

  return (
    <div className="hidden md:block md:opacity-[0]">
      <h3 className="text-sm font-medium text-gray-900 select-none">
        {Translation("popular-cateogires")}
      </h3>

      <ul className="mt-6 space-y-6">
        {AllCategories?.filter((category) => category.favorite)
          .slice(0, 4)
          .map((link, index) => {
            const path = usePath(router, link.slug)
          
            return (
                <Fragment key={index}>
                  <LinkItem 
                    name={link.name}
                    path={path}
                    slug={link.slug}
                  />
                </Fragment>
            )
          }
        )}
      </ul>
    </div>
  )
}


const LinkItem = (props) => {
  const { name, path, slug, icon = false } = props

  const activePathClasses = "text-[#377DFF] transition-all"
  const inactivePathClasses = "text-gray-500 hover:text-[#377DFF] transition-all"

  return (
    <li className="text-sm" style={{ lineHeight: 1 }}>
      <Link href={icon ? slug : `/kategorite/${slug}`}>
        <span className={path ? activePathClasses : inactivePathClasses}>
          {name} { icon && `\u2192` }
        </span>
      </Link>
    </li>
  )
}
