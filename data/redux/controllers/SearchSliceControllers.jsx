const SetSearchTerm = (state, action) => {
  state.Term = action.payload;
  state.Loading = true;
  state.Results = null;
}

const CloseSearch = (state, action) => {
  state.Visibility = false;
}

const OpenSearch = (state, action) => {
  state.Visibility = true;
}

const SetSearch = (state, action) => {
  const data = action.payload;
  state.Results = data;
  state.Loading = false;
}

export { OpenSearch, CloseSearch, SetSearchTerm, SetSearch };
