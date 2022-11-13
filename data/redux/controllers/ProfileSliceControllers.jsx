const SetProfile = (state, action) => {
  let user = action.payload;

  state.Id = user._id;
  state.Username = user.Username;
  state.Name = user.Name;
  state.Surname = user.Surname;
  state.FullName = user.FullName;
  state.Email = user.Email;
  state.Avatar = user.Avatar;
  state.Bio = user.Bio;
  state.Website = user.Website;
  state.Role = user.Role;
  state.Plan = user.Plan;
  state.NewPassword = user.NewPassword || "";
  state.Upload = user.Upload || null;
  state.Cover = user.Cover;
  state.Country = user.Country;
  state.Phone = user.Phone;
  state.City = user.City;
  state.Zip = user.Zip;
  state.Address = user.Address;
  state.Products = user.Products;

  state.Loading = false;
  state.Loaded = true;
};

const UnsetProfile = (state) => {
  state.Id = null;
  state.Username = null;
  state.FullName = null;
  state.FirstName = null;
  state.LastName = null;
  state.Email = null;
  state.Avatar = null;
  state.Role = null; 
  state.Website = null;
  state.Bio = null;
  state.Plan = null;
  state.NewPassword = "";
  state.Upload = null;
  state.Cover = null;
  state.Country = null;
  state.Phone = null;
  state.City = null;
  state.Zip = null;
  state.Address = null;
  state.Products = null;

  state.Loading = true;
  state.Loaded = false;
};

const SetProfileField = (state, action) => {
  const { Field, Value } = action.payload;
  state[Field] = Value;
};

export { SetProfile, UnsetProfile, SetProfileField };
