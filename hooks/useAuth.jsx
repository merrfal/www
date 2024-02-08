import { Auth } from "../configs/Firebase"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { LogoutAccount } from "../controllers/Slices"
import { useAuthState } from "react-firebase-hooks/auth"
import { Login } from "../api/User"

function useAuth(account) {
  const dispatch = useDispatch()

  const [allow, setAllow] = useState(true)
  const [user, loading] = useAuthState(Auth)

  const AsyncLogout = async () => {
    await Auth.signOut()
    dispatch(LogoutAccount())
  }

  useEffect(() => {
    if (!loading && allow) {
      if (!user && !account.Auth) {
        setAllow(false)
        AsyncLogout()
      }

      if (user && !account.Auth) {
        setAllow(false)
        Login(user.uid, dispatch)
      }
    }
  }, [user, loading])
}

export default useAuth
