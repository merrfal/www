import * as Messages from "../configs/Messages";

import { LogoutAccount, SetAccount } from "../controllers/Slices";
import { Notification } from "../utils/Response";
import { Request } from "../utils/Http";
import { UserObject } from "../utils/DataBuilder";

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
  } catch (error) {
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

    if (res.success === true) dispatch(SetAccount(res.data));
    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      };

      Notification(alert);
    }
  } catch (error) {
    const alert = {
      dispatch,
      message: Messages.USER_AUTH_ERROR,
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
  dispatch,
) => {
  try {
    setIsLoading(true);

    const req = await Request("USERS/UPDATE", {
      userData: userClone.userData,
      userAdditionalData: userClone.userAdditionalData,
    });

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
  } catch (error) {
    const alert = {
      dispatch,
      message: Messages.USER_UPDATE_ERROR,
      type: "error",
    };

    Notification(alert);
  } 
  
  finally {
    setIsLoading(false);
  }
};

export const View = async (username, setUser, dispatch) => {
  try {
    const req = await Request("USERS/VIEW", { username });
    const res = await req.json();

    if (res.success === true) setUser(res.data);
    else setUser(false);
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Messages.USER_VIEW_ERROR,
      type: "error",
    };

    Notification(alert);
  }
};

export const Products = async (filters, products, setProducts, dispatch) => {
  try {
    const req = await Request("USERS/PRODUCTS", { ...filters });
    const res = await req.json();

    if (res.success === true) {
      const { data } = res;

      const next = {
        products: [...products.products, ...data.products],
        hasMore: data.hasMore,
      };

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
      message: Messages.PRODUCTS_LIST_USER_ERROR,
      type: "error",
    };

    Notification(alert);
  }
};
