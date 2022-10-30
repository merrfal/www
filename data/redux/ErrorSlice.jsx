import { createSlice } from '@reduxjs/toolkit';
import { ErrorDefaultState } from './Defaults';

import {
  SetError as CallSetError,
  UnsetError as CallUnsetError,
} from './controllers';

export const ErrorSlice = createSlice({
  name: 'Error',
  initialState: ErrorDefaultState,
  reducers: {
    SetError: (state, action) => CallSetError(state, action),
    UnsetError: (state, action) => CallUnsetError(state, action),
  },
});

export const { SetError, UnsetError } = ErrorSlice.actions;
export default ErrorSlice.reducer;
