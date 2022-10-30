import { createSlice } from '@reduxjs/toolkit';
import { UserDefaultState } from './Defaults';

import {
  LogoutUser as CallLogoutUser,
  SetUserNotAuthenticated as CallSetUserNotAuthenticated,
  SetUser as CallSetUser,
} from './controllers';

export const UserSlice = createSlice({
  name: 'User',
  initialState: UserDefaultState,
  reducers: {
    LogoutUser: (state, action) => CallLogoutUser(state, action),
    SetUserNotAuthenticated: (state) => CallSetUserNotAuthenticated(state),
    SetUser: (state, action) => CallSetUser(state, action),
  },
});

export const { LogoutUser, SetUserNotAuthenticated, SetUser } = UserSlice.actions;

export default UserSlice.reducer;
