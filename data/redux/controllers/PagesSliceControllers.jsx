const SetPages = (state, action) => {
  let data = action.payload;
  
  state.Pages = data;
  state.Loading = false;
  state.Loaded = true;
};

const UnsetPages = (state) => {
  state.Pages = null;
  state.Loading = true;
  state.Loaded = false;
}

export { 
  SetPages,
  UnsetPages
};
