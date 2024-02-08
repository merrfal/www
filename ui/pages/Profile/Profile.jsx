import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Normal } from "../../layouts"
import { Loading } from "../../components"
import { useRouter } from "next/router"
import { Global } from "../../../configs/Head"
import { View } from "../../../api/User"
import { Edit } from "../../components"
import { Products, Cover, Info } from "./"
import { ProfilePage } from "../../../configs/Metas"
import { Error } from ".."

export default function Profile() {
  const dispatch = useDispatch()
  const router = useRouter()

  const account = useSelector((state) => state.Account)

  const [isEdit, setIsEdit] = useState(false)
  const [user, setUser] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [cover, setCover] = useState(null)

  useEffect(() => {
    const { username } = router.query
    
    if (username !== "" && username !== undefined) {
      View(username, setUser, dispatch)
    }
  }, [router])

  const meta = ProfilePage(user)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsEdit(false)
    }

    if (isEdit) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEscape)
    }

    else {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleEscape)
    }

    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isEdit])

  if (user === false) return <Error code={404} />

  return (
    <Normal>
      <Global 
        title={meta?.title} 
        description={meta?.description} 
      />

      {user === null ? <Loading /> : null}

      {user !== null && (
        <Fragment>
          <Cover 
            user={user} 
            cover={cover} 
            setCover={setCover} 
          />

          <Info
            user={user}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            avatar={avatar}
            setAvatar={setAvatar}
          />

          {isEdit && (
            <Edit
              user={user}
              setUser={setUser}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              account={account}
              dispatch={dispatch}
            />
          )}

          <Products 
            account={account} 
            dispatch={dispatch} 
            user={user} 
          />
        </Fragment>
      )}
    </Normal>
  )
}
