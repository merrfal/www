const SetError = (state, action) => {
  let data = action.payload;

  state.Title = data.Title;
  state.Message = data.Message;
  state.Code = data.Code;
};

const UnsetError = (state) => {
  state.Title = null;
  state.Message = null;
  state.Code = null;
};

export { SetError, UnsetError };
