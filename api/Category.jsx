import { Notification } from "../utils/Response";

export const List = async (setCategories, dispatch) => {
  try {
    const req = await Request("CATEGORIES/LIST", { uid });
    const res = await req.json();

    if (res.success === true) setCategories(res.data);
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
      message: Messages.USER_AUTH_ERROR,
      type: "error",
    };

    Notification(alert);
  }
};
