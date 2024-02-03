import { useRouter } from "next/router"
import { useState } from "react"
import { SearchIcon } from "../../icons"
import { Translation } from "../../../utils/Translations"

export default function Search() {
  const router = useRouter()
  const [term, setTerm] = useState("")

  useState(() => {
    let path = typeof window !== "undefined" && window.location.pathname

    if(typeof path === "string"){
      if(path.includes("/kerko/")){
        let paths = path?.split("/")
        let termRaw = paths[2]

        if(termRaw !== undefined && termRaw !== "[term]"){
          setTerm(termRaw)
        }
      }
    }
  }, [router])

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      router.push(`/kerko/${term}`)
    }
  }

  return (
    <div className="w-full relative hidden md:block">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon />
      </div>

      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        maxLength={32}
        required
        type="text"
        className="border w-full border-gray-200 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-1.5 "
        placeholder={Translation("search-products")}
        onKeyPress={onKeyPress}
      />
    </div>
  )
}
