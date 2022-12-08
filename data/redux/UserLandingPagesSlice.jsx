import { createSlice } from '@reduxjs/toolkit';
import { UserLandingPagesDefaultState } from './Defaults';

import {
  SetUserLandingPages as CallSetUserLandingPages,
  UnsetUserLandingPages as CallUnsetUserLandingPages ,
} from '../../controllers/redux';

export const UserLandingPagesSlice = createSlice({
  name: 'UserLandingPages',
  initialState: UserLandingPagesDefaultState,
  reducers: {
    SetUserLandingPages: (state, action) => CallSetUserLandingPages(state, action),
    UnsetUserLandingPages: (state) => CallUnsetUserLandingPages (state),
  },
});

export const {
  SetUserLandingPages,
  UnsetUserLandingPages,
} = UserLandingPagesSlice.actions;

export default UserLandingPagesSlice.reducer;
