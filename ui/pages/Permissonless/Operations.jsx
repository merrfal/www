import { Translation } from "../../../utils/Translations"
import { Auth as AuthInstance } from "../../../configs/Firebase"
import { LogoutAccount } from "../../../controllers/Slices"
import { Notification } from "../../../utils/Response"
import { useDispatch, useSelector } from "react-redux"
import { GoogleAuthProvider, getAdditionalUserInfo, signInWithPopup } from "firebase/auth"
import { Login, Register } from "../../../api/User"

export default function Operations() {
  const account = useSelector((state) => state.Account)
  const dispatch = useDispatch()

  const AsyncLogout = async () => {
    await AuthInstance.signOut()
    dispatch(LogoutAccount())
  }

  const Auth = async () => {
    if(account.Loading) return
    
    try {
      var Provider = new GoogleAuthProvider()
      const data = await signInWithPopup(AuthInstance, Provider)

      if (data) {
        const user = data.user
        const { isNewUser } = getAdditionalUserInfo(data)

        if (isNewUser) Register(user, dispatch)
        else Login(user.uid, dispatch)
      } 
      
      else {
        const alert = {
          dispatch,
          message: Translation("user-auth-error"),
          type: "error",
        }

        await AsyncLogout()
        Notification(alert)
      }
    } 
    
    catch (error) {
      const alert = {
        dispatch,
        message: Translation("user-auth-error"),
        type: "error",
      }

      await AsyncLogout()
      Notification(alert)
    }
  }

  return (
    <div className="mt-6">
      <div onClick={Auth}>
        <p className="hover:cursor-pointer text-base font-medium text-indigo-600 hover:text-indigo-500">
          {Translation("login-in-platform")} &larr;
        </p>
      </div>
    </div>
  )
}
