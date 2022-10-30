import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { 
  UserSlice, 
  PageSlice,
  NotificationSlice,
  ConfirmationSlice,
  PagesSlice,
  ProfileSlice,
  ErrorSlice,
  UserLandingPagesSlice,
} from '../data/redux';

const combinedReducer = combineReducers({
  user: UserSlice,
  page: PageSlice,
  pages: PagesSlice,
  profile: ProfileSlice,
  notification: NotificationSlice,
  confirmation: ConfirmationSlice,
  error: ErrorSlice,
  userLandingPages: UserLandingPagesSlice,
});

const masterReducer = (state, action) => combinedReducer(state, action);
export const makeStore = () => configureStore({reducer: masterReducer});
export const Redux = createWrapper(makeStore, { debug: process.env.NEXT_PUBLIC_IS_DEBUG === true ? true : false });
