import { createSlice } from "@reduxjs/toolkit";

import {
  NotificationDefaultState,
  ConfirmationDefaultState,
  AccountDefaultState,
} from "../configs/Defaults";

import {
  OpenConfirmation as CallOpenConfirmation,
  CloseConfirmation as CallCloseConfirmation,
  ShowNotification as CallShowNotification,
  HideNotification as CallHideNotification,
  LogoutAccount as CallLogoutAccount,
  SetAccount as CallSetAccount,
} from "../controllers/Redux";

const CONFRIMATION = createSlice({
  name: "Confirmation",
  initialState: ConfirmationDefaultState,
  reducers: {
    OpenConfirmation: (state, action) => CallOpenConfirmation(state, action),
    CloseConfirmation: (state) => CallCloseConfirmation(state),
  },
});

const NOTIFICATION = createSlice({
  name: "Notification",
  initialState: NotificationDefaultState,
  reducers: {
    ShowNotification: (state, action) => CallShowNotification(state, action),
    HideNotification: (state) => CallHideNotification(state),
  },
});

const ACCOUNT = createSlice({
  name: "Account",
  initialState: AccountDefaultState,
  reducers: {
    LogoutAccount: (state, action) => CallLogoutAccount(state, action),
    SetAccount: (state, action) => CallSetAccount(state, action),
  },
});

export const { LogoutAccount, SetAccount } = ACCOUNT.actions;
export const { ShowNotification, HideNotification } = NOTIFICATION.actions;
export const { OpenConfirmation, CloseConfirmation } = CONFRIMATION.actions;

export const Account = ACCOUNT.reducer;
export const Notification = NOTIFICATION.reducer;
export const Confirmation = CONFRIMATION.reducer;
