import { createSlice } from '@reduxjs/toolkit';
import { FilterDefaultState } from './Defaults';

import {
  SetFilterTerm as CallSetFilterTerm,
  SetFilter as CallSetFilter,
  SetCityFilterTerm as CallSetCityFilterTerm
} from './controllers';

export const FilterSlice = createSlice({
  name: 'Filter',
  initialState: FilterDefaultState,
  reducers: {
    SetFilterTerm: (state, action) => CallSetFilterTerm(state, action),
    SetFilter: (state, action) => CallSetFilter(state, action),
    SetCityFilterTerm: (state, action) => CallSetCityFilterTerm(state, action),
  },
});

export const { SetFilterTerm, SetFilter, SetCityFilterTerm } = FilterSlice.actions;
export default FilterSlice.reducer;
