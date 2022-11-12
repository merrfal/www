const LogoutUser = (state) => {
  state.Id = null;
  state.Uid = null;
  state.Username = null;
  state.Name = null;
  state.Surname = null;
  state.FullName = null;
  state.Email = null;
  state.Avatar = null;
  state.Role = null;
  state.Plan = null;
  state.Cover = null;
  state.Country = null;
  state.Phone = null;
  state.City = null;
  state.Zip = null;
  state.Address = null;

  state.Auth = false;
  state.Loading = false;

  localStorage.removeItem('user');
  localStorage.removeItem('token');
  localStorage.removeItem('uid');

  window.location.href = '/';
};

const SetUserNotAuthenticated = (state) => {
  state.Auth = false;
  state.Loading = false;

  localStorage.removeItem('user');
  localStorage.removeItem('token');
  localStorage.removeItem('uid');
};

const SetUser = (state, action) => {
  let user = action.payload;
  let token = action.payload.Token;

  state.Id = user._id;
  state.Uid = user.Uid;
  state.Username = user.Username;
  state.Name = user.Name;
  state.Surname = user.Surname;
  state.FullName = user.FullName;
  state.Email = user.Email;
  state.Avatar = user.Avatar;
  state.Role = user.Role;
  state.Plan = user.Plan;

  localStorage.setItem('token', token);
  localStorage.setItem('user', user._id);
  localStorage.setItem('uid', user.Uid);

  state.Auth = true;
  state.Loading = false;
};

export { LogoutUser, SetUserNotAuthenticated, SetUser };
