import { createSlice } from '@reduxjs/toolkit';
import { PagesDefaultState } from './Defaults';

import {
  SetPages as CallSetPages,
  UnsetPages as CallUnsetPages ,
} from '../../controllers/redux';

export const PagesSlice = createSlice({
  name: 'Pages',
  initialState: PagesDefaultState,
  reducers: {
    SetPages: (state, action) => CallSetPages(state, action),
    UnsetPages: (state) => CallUnsetPages (state),
  },
});

export const {
  SetPages,
  UnsetPages,
} = PagesSlice.actions;

export default PagesSlice.reducer;
