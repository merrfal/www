import { Auth } from "../configs/Firebase";

export const OpenConfirmation = (state, action) => {
  const data = action.payload;

  state.Title = data.Title || "";
  state.Message = data.Message || "";
  state.Action = data.Action;
  state.Type = data.Type || "success";
  state.Visibility = true;
};

export const CloseConfirmation = (state) => {
  state.Title = null;
  state.Message = null;
  state.Action = null;
  state.Type = null;
  state.Visibility = false;
};

export const ShowNotification = (state, action) => {
  const data = action.payload;

  state.Title = data.Title || "";
  state.Message = data.Message || "";
  state.Type = data.Type || "success";
  state.Visibility = true;
};

export const HideNotification = (state) => {
  state.Title = null;
  state.Message = null;
  state.Type = null;
  state.Visibility = false;
};


export const LogoutAccount = (state) => {
  Auth.signOut();

  state.User = null;
  state.Auth = false;
  state.Loading = false;
};

export const SetAccount = (state, action) => {
  console.log({payload: action.payload})
  state.User = action.payload;
  state.Auth = true;
  state.Loading = false; 
};