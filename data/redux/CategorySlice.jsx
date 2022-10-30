import { createSlice } from '@reduxjs/toolkit';
import { CategoryDefaultState } from './Defaults';

import {
  SetCategories as CallSetCategories,
  UnsetCategories as CallUnsetCategories,
} from './controllers';

export const CategorySlice = createSlice({
  name: 'category',
  initialState: CategoryDefaultState,
  reducers: {
    SetCategories: (state, action) => CallSetCategories(state, action),
    UnsetCategories: (state) => CallUnsetCategories(state),
  },
});

export const { SetCategories, UnsetCategories } = CategorySlice.actions;
export default CategorySlice.reducer;
