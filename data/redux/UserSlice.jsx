import { createSlice } from '@reduxjs/toolkit';
import { UserDefaultState } from './Defaults';

import {
  LogoutUser as CallLogoutUser,
  SetUserNotAuthenticated as CallSetUserNotAuthenticated,
  SetUser as CallSetUser,
  SetFavorites as CallSetFavorites,
} from './controllers';

export const UserSlice = createSlice({
  name: 'User',
  initialState: UserDefaultState,
  reducers: {
    LogoutUser: (state, action) => CallLogoutUser(state, action),
    SetUserNotAuthenticated: (state, action) => CallSetUserNotAuthenticated(state, action),
    SetUser: (state, action) => CallSetUser(state, action),
    SetFavorites: (state, action) => CallSetFavorites(state, action),
  },
});

export const { LogoutUser, SetUserNotAuthenticated, SetUser, SetFavorites } = UserSlice.actions;

export default UserSlice.reducer;
