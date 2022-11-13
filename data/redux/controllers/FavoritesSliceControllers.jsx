const SetFavorites = (state, action) => {
  let data = action.payload;
  
  state.Favorites = data;
  state.Loading = false;
  state.Loaded = true;
};

const UnsetFavorites = (state) => {
  state.Favorites = null;
  state.Loading = true;
  state.Loaded = false;
}

export { 
  SetFavorites,
  UnsetFavorites
};
