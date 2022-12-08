import { createSlice } from '@reduxjs/toolkit';
import { ConfirmationDefaultState } from './Defaults';

import {
  OpenConfirmation as CallOpenConfirmation,
  CloseConfirmation as CallCloseConfirmation,
} from '../../controllers/redux';

export const ConfirmationSlice = createSlice({
  name: 'confirmation',
  initialState: ConfirmationDefaultState,
  reducers: {
    OpenConfirmation: (state, action) => CallOpenConfirmation(state, action),
    CloseConfirmation: (state) => CallCloseConfirmation(state),
  },
});

export const { OpenConfirmation, CloseConfirmation } = ConfirmationSlice.actions;
export default ConfirmationSlice.reducer;
