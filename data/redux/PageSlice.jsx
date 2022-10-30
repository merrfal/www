import { createSlice } from '@reduxjs/toolkit';
import { PageDefaultState } from './Defaults';

import {
  SetPage as CallSetPage,
  UnsetPage as CallUnsetPage,
  SetField as CallSetField,
  UnsetPrepage as CallUnsetPrepage,
  SetPrepageField as CallSetPrepageField,
} from './controllers';

export const PageSlice = createSlice({
  name: 'Page',
  initialState: PageDefaultState,
  reducers: {
    SetPage: (state, action) => CallSetPage(state, action),
    UnsetPage: (state, action) => CallUnsetPage(state, action),
    SetField: (state, action) => CallSetField(state, action),
    SetPrepageField: (state, action) => CallSetPrepageField(state, action),
    UnsetPrepage: (state, action) => CallUnsetPrepage(state, action),
  },
});

export const { 
  SetPage, 
  UnsetPage, 
  SetField, 
  SetPrepageField, 
  UnsetPrepage
} = PageSlice.actions;

export default PageSlice.reducer;
