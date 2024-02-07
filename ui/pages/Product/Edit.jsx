import Link from "next/link"

import { Fragment } from "react"
import { EditIcon } from "../../icons"
import { useSelector } from "react-redux"
import { Translation } from "../../../utils/Translations"

export default function Edit({ slug, user, postedAnonymously }) {  
  const account = useSelector(state => state.Account)
  const allowManage = () => {
    if (account?.User?.userAdditionalData?.role === "admin") return true

    else {
        if (postedAnonymously) {
            if(account?.User?._id === user) return true
            else return false
        }
    
        else {
            if (account?.User?._id === user?._id) return true
            else return false
        }
    }
  }
  
  if(allowManage()) return (
    <Fragment>
        <div className="h-5 border-r border-gray-200 mx-4" />

        <Link href={`/${slug}/perditeso`}>
            <div className="bg-white px-2 py-1 h-8 w-auto flex justify-center items-center align-middle rounded-md hover:bg-gray-50 border-gray-150 border transition-all">
                <EditIcon className="h-5 w-5 text-gray-400" />

                <span className="text-gray-500 text-sm ml-1.5 hidden md:block">
                    {Translation("edit-product")}
                </span>

                <span className="text-gray-500 text-sm ml-1.5 block md:hidden">
                    {Translation("edit")}
                </span>
            </div>
        </Link>
    </Fragment>
  )
}