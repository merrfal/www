const SetPage = (state, action) => {
  let data = action.payload;
  console.log('data', data)

  state.Page = data;
  state.Loading = false;
  state.Loaded = true;
};

const UnsetPage = (state) => {
  state.Page = null;
  state.Loading = true;
  state.Loaded = false;
};

const SetField = (state, action) => {
  let data = action.payload;
  state.Page[data.Field] = data.Value;
}

const UnsetPrepage = (state) => {
  state.Prepage = {};
}

const SetPrepageField = (state, action) => {
  const { Field, Value } = action.payload;
  state.Prepage[Field] = Value;
}

export { SetPage, UnsetPage, SetField, UnsetPrepage, SetPrepageField };
