import { FirebaseAuth } from '../../config/Firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Notifier } from '../../utils';
import { UserLogin, UserRegister } from '.';

const UserGoogle = async (dispatch, informations) => {
  var Provider = new GoogleAuthProvider();
  const data = await signInWithPopup(FirebaseAuth, Provider);

  try {
    if (data) {
      const user = data.user;
      const creationTime = user.metadata.creationTime;
      const lastSignInTime = user.metadata.lastSignInTime;

      if (creationTime === lastSignInTime) UserRegister(user, dispatch, informations);
      else UserLogin(user.uid, dispatch);
    } else {
      Notifier(
        {
          dispatch: dispatch,
          Title: `Something wen't wrong trying to authenticate you!`,
          Type: 'error',
        }
      );
    }
  } catch (error) {
    Notifier(
      {
        dispatch: dispatch,
        Title: `Something wen't wrong trying to authenticate you!`,
        Type: 'error',
      }
    );
  }
};

export default UserGoogle;
