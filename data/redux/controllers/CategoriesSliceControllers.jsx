const SetCategories = (state, action) => {
  let data = action.payload;

  state.Categories = data;
  state.Loading = false;
  state.Loaded = true;
};

const UnsetCategories = (state) => {
  state.Categories = null;
  state.Loading = true;
  state.Loaded = false;
};

export { SetCategories, UnsetCategories };
