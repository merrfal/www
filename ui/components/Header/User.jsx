import Link from "next/link"

import { getDownloadURL, ref } from "firebase/storage"
import { useState, useRef, useEffect, Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Storage } from "../../../configs/Firebase"
import { useAuth, useGoogle as UseGoogle } from "../../../hooks"
import { AddIcon } from "../../icons"
import { Dropdown } from "./"
import { isStorageReadable } from "../../../utils/Firebase"
import { Loading } from ".."
import { NO_AVATAR } from "../../../configs/Constants"

const Auth = ({ account }) => {
  const [menu, setOpen] = useState()
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    if (account.Auth) {
      let avtr = account?.User?.userData?.avatar

      if(avtr === NO_AVATAR) setAvatar(NO_AVATAR)

      else {
        let isFirebaseReadable = isStorageReadable(avtr)

        if(isFirebaseReadable) {
          const file = `users/${avtr}`
          const unextracted = ref(Storage, file)

          const url = getDownloadURL(unextracted)
          setAvatar(url || NO_AVATAR)
        }

        else setAvatar(avtr)
      }
    }
  }, [account])

  let clickOutside = (handler) => {
    let domNode = useRef()

    useEffect(() => {
      let maybeHandler = (event) => !domNode?.current?.contains(event?.target) && handler()
      document.addEventListener("mousedown", maybeHandler)

      return () => document.removeEventListener("mousedown", maybeHandler)
    })

    return domNode
  }

  let domNode = clickOutside(() => setOpen(false))

  return (
    <div className="relative accoount-menu flex items-center" ref={domNode}>
      <Link href="/shto">
        <span className="p-1 mr-1 text-gray-400 hover:text-gray-500 lg:block hover:opacity-[.85] transition-all">
          <AddIcon />
        </span>
      </Link>

      <button
        type="button"
        onClick={() => setOpen(!menu)}
        className="w-[36px] h-[32px] ml-0 inline-flex justify-center bg-white text-sm font-medium text-gray-700 hover:opacity-[.85] transition-all"
      >
        <img
          loading="lazy"
          onDragStart={(e) => e.preventDefault()}
          src={avatar || NO_AVATAR}
          onError={() => setAvatar(NO_AVATAR)}
          className={`w-[32px] h-[32px] border-gray-200 rounded-full ${avatar === null ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}`}
        />
      </button>
      

      {menu && <Dropdown username={account.User.userData.username} />}
    </div>
  )
}

const NotAuth = ({account}) => {
    const dispatch = useDispatch()

    return (
      <div className="relative accoount-menu flex items-center">
          <span className="text-gray-400 hover:text-gray-500 lg:block hover:opacity-[.85] transition-all ml-2">
            <Link href="/shto">
                <AddIcon />
            </Link>
          </span>
        
        <UseGoogle account={account} dispatch={dispatch} />
      </div>
    )
}

export default function User() {
  const account = useSelector((state) => state.Account)
  useAuth(account)

  return (
    <Fragment>
      {account.Loading && <Loading withContainer={false} width="52px" height="52px"  />}
      {account.Auth && <Auth account={account} />}
      {!account.Auth && !account.Loading && <NotAuth account={account} />}
    </Fragment>
  )
}