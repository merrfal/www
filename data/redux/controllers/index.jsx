import {
  LogoutUser,
  SetUserNotAuthenticated,
  SetUser,
} from './UserSliceControllers';

import {
  SetProfile,
  UnsetProfile,
  SetProfileField,
} from './ProfileSliceControllers';

import {
  SetCategories,
  UnsetCategories,
} from './CategoriesSliceControllers';

import {
  OpenConfirmation,
  CloseConfirmation,
} from './ConfirmationSliceControllers';

import {
  ShowNotification,
  HideNotification,
} from './NotificationSliceControllers';

import {
  SetPage,
  UnsetPage,
  SetField,
  SetPrepageField,
  UnsetPrepage,
} from './PageSliceControllers';

import { OpenSearch, CloseSearch, SetSearchTerm, SetSearch} from './SearchSliceControllers';
import {SetFilterTerm, SetFilter, SetCityFilterTerm} from './FilterSliceControllers';
import { SetPages, UnsetPages } from './PagesSliceControllers';
import { SetFavorites, UnsetFavorites } from './FavoritesSliceControllers';

import {
  SetUserLandingPages,
  UnsetUserLandingPages,
} from './UserLandingPagesSliceControllers';

import { SetError, UnsetError } from './ErrorSliceControllers';

export {
  LogoutUser,
  SetUserNotAuthenticated,
  SetUser,
  OpenConfirmation,
  CloseConfirmation,
  ShowNotification,
  HideNotification,
  SetPage,
  UnsetPage,
  SetPages,
  UnsetPages,
  SetProfile,
  UnsetProfile,
  SetField,
  SetError,
  UnsetError,
  SetUserLandingPages,
  UnsetUserLandingPages,
  SetProfileField,
  SetPrepageField,
  UnsetPrepage,
  SetCategories,
  UnsetCategories,
  SetFavorites,
  UnsetFavorites,
  OpenSearch, 
  CloseSearch, 
  SetSearchTerm,
  SetSearch,
  SetFilter,
  SetFilterTerm,
  SetCityFilterTerm
};
