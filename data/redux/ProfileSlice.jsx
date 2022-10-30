import { createSlice } from '@reduxjs/toolkit';
import { ProfileDefaultState } from './Defaults';

import {
  SetProfile as CallSetProfile,
  UnsetProfile as CallUnsetProfile,
  SetProfileField as CallSetProfileField,
} from './controllers';

export const ProfileSlice = createSlice({
  name: 'Profile',
  initialState: ProfileDefaultState,
  reducers: {
    SetProfile: (state, action) => CallSetProfile(state, action),
    UnsetProfile: (state) => CallUnsetProfile(state),
    SetProfileField: (state, action) => CallSetProfileField(state, action),
  },
});

export const {
  SetProfile,
  UnsetProfile,
  SetProfileField,
} = ProfileSlice.actions;

export default ProfileSlice.reducer;
