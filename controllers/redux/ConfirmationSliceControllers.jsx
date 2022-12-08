const OpenConfirmation = (state, action) => {
  const data = action.payload;

  state.Title = data.Title || '';
  state.Message = data.Message || '';
  state.Action = data.Action;
  state.Type = data.Type || 'success';
  state.Visibility = true;
};

const CloseConfirmation = (state) => {
  state.Title = null;
  state.Message = null;
  state.Action = null;
  state.Type = null;
  state.Visibility = false;
};

export { OpenConfirmation, CloseConfirmation };
