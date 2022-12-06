import { createSlice } from '@reduxjs/toolkit';
import { FavoritesDefaultState } from './Defaults';

import {
  SetFavorites as CallSetFavorites,
  UnsetFavorites as CallUnsetFavorites ,
} from '../../controllers/redux';

export const FavoritesSlice = createSlice({
  name: 'Favorites',
  initialState: FavoritesDefaultState,
  reducers: {
    SetFavorites: (state, action) => CallSetFavorites(state, action),
    UnsetFavorites: (state) => CallUnsetFavorites (state),
  },
});

export const {
  SetFavorites,
  UnsetFavorites,
} = FavoritesSlice.actions;

export default FavoritesSlice.reducer;
