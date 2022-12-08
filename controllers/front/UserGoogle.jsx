import { FirebaseAuth } from '../../config/Firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { Notifier } from '../../utils';
import { UserLogin, UserRegister } from '.';

const UserGoogle = async (dispatch, informations) => {
  var Provider = new GoogleAuthProvider();
  const data = await signInWithRedirect(FirebaseAuth, Provider);

  try {
    if (data) {
      const user = data.user;
      const creationTime = user.metadata.creationTime;
      const lastSignInTime = user.metadata.lastSignInTime;

      if (creationTime === lastSignInTime) UserRegister(user, dispatch, informations);
      else UserLogin(user.uid, dispatch);
    } 
    
    else Notifier(dispatch, '', 'error')
  } catch (error) {
    Notifier(dispatch, '', 'error')
  }
};

export default UserGoogle;
