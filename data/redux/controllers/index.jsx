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

import { SetPages, UnsetPages } from './PagesSliceControllers';

import {
  SetUserLandingPages,
  UnsetUserLandingPages,
} from './UserLandingPagesSliceControllers';

import { SetError, UnsetError } from './ErrorSliceControllers';


import {
  SetContact,
  UnsetContact,
  SetContactField,
  SetPrecontactField,
  UnsetPrecontact,
} from './ContactSliceControllers';


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
  SetContact,
  UnsetContact,
  SetContactField,
  SetPrecontactField,
  UnsetPrecontact,
};
