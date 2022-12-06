const SetUserLandingPages = (state, action) => {
  let data = action.payload;

  state.Pages = data;
  state.Loading = false;
  state.Loaded = true;
};

const UnsetUserLandingPages = (state) => {
  state.Pages = null;
  state.Loading = true;
  state.Loaded = false;
}

export { 
  SetUserLandingPages,
  UnsetUserLandingPages
};
