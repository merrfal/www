import * as Messages from "../configs/Messages";

import { LogoutAccount, SetAccount } from "../controllers/Slices";
import { Notification } from "../utils/Response";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Request } from "../utils/Http";

export const Login = async (uid, dispatch) => {
  try {
    const req = await Request("USERS/LOGIN", { uid });
    const res = await req.json();

    if (res.success === true) dispatch(SetAccount(res.data));
    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      };

      dispatch(LogoutAccount());
      Notification(alert);
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Messages.USER_AUTH_ERROR,
      type: "error",
    };

    dispatch(LogoutAccount());
    Notification(alert);
  }
};

export const Register = async (initalUser, dispatch) => {
  try {
    const user = UserObject(initalUser);

    const req = await Request("USERS/CREATE", { userData: user });
    const res = await req.json();

    if (res.success === true) SetAccount(res.data);
    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      };

      Notification(alert);
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch, 
      message: "Ndodhi një gabim gjatë përpjekjes për të regjistruar përdoruesin.",
      type: "error",
    };

    Notification(alert);
  }
};

export const Update = async (
  userClone, 
  setUser, 
  setIsLoading, 
  setIsEdit,
  setUserClone, 
  dispatch
) => {
  try {
    setIsLoading(true);

    const req = await Request("USER/PRODUCTS", {...userClone});
    const res = await req.json();

    if (res.success === true) {
      const { data } = res;

      const alert = {
        dispatch,
        message: res.message,
        type: "success",
      };

      Notification(alert);

      setUser(data);
      setUserClone(data);
      setIsEdit(false);
    }

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      };

      Notification(alert);
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Messages.PRODUCTS_LATEST_ERROR,
      type: "error",
    };

    Notification(alert);
  }

  finally {
    setIsLoading(false);
  }

  // setIsLoading(true);
  // let user = structuredClone(profile);

  // const url = `${Url}/api/users/UserUpdate/${profile.Id}`;
  // const config = Request("P", "JSON", profile, true, false, false);

  // if (image) {
  //   const storageRef = ref(Storage, `/users/${v4() + image.file.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, image?.file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //     async () => {
  //       await getDownloadURL(uploadTask.snapshot.ref).then(
  //         async (downloadURL) => {
  //           user.Avatar = downloadURL;
  //           const config_with_avatar = Request(
  //             "P",
  //             "JSON",
  //             user,
  //             true,
  //             false,
  //             false
  //           );
  //           try {
  //             const req = await fetch(url, config_with_avatar);
  //             const res = await req.json();

  //             if (res.success === true) {
  //               window.location.reload();
  //               Notification(dispatch, res.message, "success");
  //             } else Notification(dispatch, res.message, "error");
  //           } catch (error) {
  //             Notification(dispatch, "", "error");
  //           } finally {
  //             setImage(null);
  //             setIsEdit(false);
  //             setIsLoading(false);
  //           }
  //         }
  //       );
  //     }
  //   );
  // } else {
  //   try {
  //     const req = await fetch(url, config);
  //     const res = await req.json();

  //     if (res.success === true) {
  //       Notification(dispatch, res.message, "success");
  //       window.location.reload();
  //     } else Notification(dispatch, res.message, "error");
  //   } catch (error) {
  //     Notification(dispatch, "", "error");
  //   } finally {
  //     setImage(null);
  //     setIsEdit(false);
  //     setIsLoading(false);
  //   }
  // }
};

export const View = async (username, setUser, dispatch) => {
  try {
    const req = await Request("USERS/VIEW", { username });
    const res = await req.json();

    if (res.success === true) setUser(res.data);
    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      };

      Notification(alert);
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: "Ndodhi një gabim gjatë përpjekjes për të gjetur përdoruesin.",
      type: "error",
    };

    Notification(alert);
  }
};

export const Products = async (filters, products, setProducts, dispatch) => {
  try {
    const req = await Request("USER/PRODUCTS", {...filters});
    const res = await req.json();

    if (res.success === true) {
      const { data } = res;

      const next = { 
        products: [...products.products, ...data.products], 
        hasMore: data.hasMore
      }

      setProducts(next);
    }

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      };

      Notification(alert);
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Messages.PRODUCTS_LATEST_ERROR,
      type: "error",
    };

    Notification(alert);
  }
};