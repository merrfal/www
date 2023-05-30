import { Login, Register } from "../api/User";
import { GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { Notification } from "../utils/Response";
import { LogoutAccount } from "../controllers/Slices";
import { Auth as AuthInstance } from "../configs/Firebase";
import { AccountIcon } from "../ui/icons";

import { USER_AUTH_ERROR } from "../configs/Messages";

export default function useGoogle({dispatch, account}) {
  const Auth = async () => {
    if(account.Loading) return;
    
    try {
      var Provider = new GoogleAuthProvider();
      const data = await signInWithPopup(AuthInstance, Provider);

      if (data) {
        const user = data.user;
        const { isNewUser } = getAdditionalUserInfo(data);

        if (isNewUser) Register(user, dispatch);
        else Login(user.uid, dispatch);
      } 
      
      else {
        const alert = {
          dispatch,
          message: USER_AUTH_ERROR,
          type: "error",
        }

        dispatch(LogoutAccount());
        Notification(alert);
      }
    } 
    
    catch (error) {
      const alert = {
        dispatch,
        message: USER_AUTH_ERROR,
        type: "error",
      }

      dispatch(LogoutAccount());
      Notification(alert);
    }
  };

  return (
    <div onClick={() => Auth()} className="p-2 ml-3 text-gray-400 hover:text-gray-500 lg:ml-4 hover:cursor-pointer">
      <AccountIcon />
    </div>
  );
}
