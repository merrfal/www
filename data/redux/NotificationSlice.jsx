import { createSlice } from '@reduxjs/toolkit';
import { NotificationDefaultState } from './Defaults';

import {
  ShowNotification as CallShowNotification,
  HideNotification as CallHideNotification,
} from '../../controllers/redux';

export const NotificationSlice = createSlice({
  name: 'notification',
  initialState: NotificationDefaultState,
  reducers: {
    ShowNotification: (state, action) => CallShowNotification(state, action),
    HideNotification: (state) => CallHideNotification(state),
  },
});

export const { ShowNotification, HideNotification } = NotificationSlice.actions;
export default NotificationSlice.reducer;
