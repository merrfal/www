import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { Prod } from "../utils";

import {
  UserSlice,
  PageSlice,
  NotificationSlice,
  ConfirmationSlice,
  PagesSlice,
  ProfileSlice,
  UserLandingPagesSlice,
  CategoriesSlice,
  FavoritesSlice,
  SearchSlice,
  FilterSlice,
} from "../data/redux";

const combinedReducer = combineReducers({
  user: UserSlice,
  page: PageSlice,
  pages: PagesSlice,
  profile: ProfileSlice,
  notification: NotificationSlice,
  confirmation: ConfirmationSlice,
  userLandingPages: UserLandingPagesSlice,
  categories: CategoriesSlice,
  favorites: FavoritesSlice,
  search: SearchSlice,
  filter: FilterSlice,
});

const masterReducer = (state, action) => combinedReducer(state, action);
export const makeStore = () => configureStore({ reducer: masterReducer });
export const Redux = createWrapper(makeStore, { debug: Prod });
