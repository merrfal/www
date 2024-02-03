import Link from "next/link";

import { useRouter } from "next/router"
import { usePath } from "../../../hooks"

export default function MenuLink({ name, link, username }) {
  const router = useRouter()
  const path = usePath(router, username)

  const activePathClasses = "flex items-center gap-2 px-3 py-[7px] font-medium text-sm text-[#377DFF] transition-all cursor-pointer hover:cursor-pointer hover:bg-gray-50 transition-all ease-in-out duration-500 rounded-tr-md rounded-tl-md"
  const inactivePathClasses = "flex items-center gap-2 px-3 py-[7px] text-gray-600 font-medium hover:text-gray-700 text-sm transition-all cursor-pointer hover:cursor-pointer hover:bg-gray-50 transition-all ease-in-out duration-500 rounded-tr-md rounded-tl-md"

  return (
    <Link href={link} className={path ? activePathClasses : inactivePathClasses}>
      <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 18V17C7 15.6739 7.52678 14.4021 8.46447 13.4645C9.40215 12.5268 10.6739 12 12 12C13.3261 12 14.5979 12.5268 15.5355 13.4645C16.4732 14.4021 17 15.6739 17 17V18" stroke={!path ? "#555" : "#377DFF"} stroke-width="1.5" stroke-linecap="round"/>
        <path d="M12 12C12.7956 12 13.5587 11.6839 14.1213 11.1213C14.6839 10.5587 15 9.79565 15 9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7956 6 12 6C11.2044 6 10.4413 6.31607 9.87868 6.87868C9.31607 7.44129 9 8.20435 9 9C9 9.79565 9.31607 10.5587 9.87868 11.1213C10.4413 11.6839 11.2044 12 12 12Z" stroke={!path ? "#555" : "#377DFF"} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={!path ? "#555" : "#377DFF"} stroke-width="1.5"/>
      </svg>

      {name}
    </Link>
  )
}