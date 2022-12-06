import { createSlice } from '@reduxjs/toolkit';
import { SearchDefaultState } from './Defaults';

import {
  CloseSearch as CallCloseSearch,
  OpenSearch as CallOpenSearch,
  SetSearchTerm as CallSetSearchTerm,
  SetSearch as CallSetSearch,
} from '../../controllers/redux';


export const SearchSlice = createSlice({
  name: 'Search',
  initialState: SearchDefaultState,
  reducers: {
    OpenSearch: (state, action) => CallOpenSearch(state, action),
    CloseSearch: (state, action) => CallCloseSearch(state, action),
    SetSearchTerm: (state, action) => CallSetSearchTerm(state, action),
    SetSearch: (state, action) => CallSetSearch(state, action),
  },
});

export const { OpenSearch, CloseSearch, SetSearchTerm, SetSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
