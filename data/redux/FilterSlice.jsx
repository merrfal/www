import { createSlice } from '@reduxjs/toolkit';
import { FilterDefaultState } from './Defaults';

import {
  SetCategory as CallSetCategory,
  SetFilter as CallSetFilter,
  SetCity as CallSetCity,
  SetSort as CallSetSort,
} from '../../controllers/redux';

export const FilterSlice = createSlice({
  name: 'filter',
  initialState: FilterDefaultState,
  reducers: {
    SetCity: (state, action) => CallSetCity(state, action),
    SetFilter: (state, action) => CallSetFilter(state, action),
    SetCategory: (state, action) => CallSetCategory(state, action),
    SetSort: (state, action) => CallSetSort(state, action),
  },
});

export const { SetCategory, SetFilter, SetCity, SetSort } = FilterSlice.actions;
export default FilterSlice.reducer;
