import { createSlice } from '@reduxjs/toolkit';
import { CategoriesDefaultState } from './Defaults';

import {
  SetCategories as CallSetCategories,
  UnsetCategories as CallUnsetCategories,
} from './controllers';

export const CategoriesSlice = createSlice({
  name: 'categories',
  initialState: CategoriesDefaultState,
  reducers: {
    SetCategories: (state, action) => CallSetCategories(state, action),
    UnsetCategories: (state) => CallUnsetCategories(state),
  },
});

export const { SetCategories, UnsetCategories } = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
