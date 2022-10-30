const ShowNotification = (state, action) => {
  const data = action.payload;
  
  state.Title = data.Title || '';
  state.Message = data.Message || '';
  state.Type = data.Type || 'success';
  state.Visibility = true;
};

const HideNotification = (state) => {
  state.Title = null;
  state.Message = null;
  state.Type = null;
  state.Visibility = false;
};

export { ShowNotification, HideNotification };
