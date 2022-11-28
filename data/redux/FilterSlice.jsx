import { createSlice } from '@reduxjs/toolkit';
import { FilterDefaultState } from './Defaults';

import {
  SetFilterTerm as CallSetFilterTerm,
  SetFilter as CallSetFilter,
} from './controllers';

export const FilterSlice = createSlice({
  name: 'filter',
  initialState: FilterDefaultState,
  reducers: {
    SetFilterTerm: (state, action) => CallSetFilterTerm(state, action),
    SetFilter: (state, action) => CallSetFilter(state, action),
  },
});

export const { SetFilterTerm, SetFilter } = FilterSlice.actions;
export default FilterSlice.reducer;
