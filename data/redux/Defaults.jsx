const UserDefaultState = {
  Id: null,
  Uid: null,
  Username: null,
  Name: null,
  Surname: null,
  FullName: null,
  Email: null,
  Role: null,
  Plan: null,
  Avatar: null,
  Cover: null,
  Country: null,
  Phone: null,
  City: null,
  Zip: null,
  Address: null,
  Favorites: null,

  Auth: false,
  Loading: true,
};

const ProfileDefaultState = {
  Id: null,
  Username: null,
  Name: null,
  Surname: null,
  FullName: null,
  Email: null,
  Avatar: null,
  Role: null,
  Plan: null,
  Upload: null,
  Cover: null,
  Country: null,
  Phone: null,
  City: null,
  Zip: null,
  Address: null,
  Products: null,
  NewPassword: "",

  Loading: true,
  Loaded: false,
};

const PageDefaultState = {
  Page: null,
  Loading: true,
  Loaded: false,
  Prepage: {},
};

const SearchDefaultState = {
  Results: null,
  Term: "",
  Loading: false,
  Visibility: false,
};

const FilterDefaultState = {
  Results: null,
  Term: "",
  Loading: true,
  Visibility: false,
  CityTerm: "",
};

const UserLandingPagesDefaultState = {
  Pages: null,
  Loading: true,
  Loaded: false
};

const PagesDefaultState = {
  Pages: null,
  Loading: true,
  Loaded: false
};

const FavoritesDefaultState = {
  Favorites: null,
  Loading: true,
  Loaded: false
};

const ConfirmationDefaultState = {
  Title: null,
  Message: null,
  Action: null,
  Type: null,
  Visibility: false,
};

const CategoriesDefaultState = {
  Categories: null,
  Loading: true,
  Loaded: false,
};

const NotificationDefaultState = {
  Title: null,
  Message: null,
  Action: null,
  Type: null,
  Visibility: false,
};

const ErrorDefaultState = {
  Title: null,
  Message: null,
  Code: null,
};

export {
  UserDefaultState,
  ConfirmationDefaultState,
  NotificationDefaultState,
  PagesDefaultState,
  PageDefaultState,
  ProfileDefaultState,
  ErrorDefaultState,
  UserLandingPagesDefaultState,
  CategoriesDefaultState,
  FavoritesDefaultState,
  SearchDefaultState,
  FilterDefaultState
};
