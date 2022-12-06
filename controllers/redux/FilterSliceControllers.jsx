const SetCity = (state, action) => {
  let cities = state.Cities;
  let city = action.payload;

  if (cities.includes(city)) {
    cities = cities.filter((item) => item !== city);
  } 
  
  else {
    cities.push(city);
  }

  state.Loading = true;
  state.Results = null;
};

const SetCategory = (state, action) => {
  let categories = state.Categories;
  let category = action.payload;

  if (categories.includes(category)) {
    categories = categories.filter((item) => item !== category);
  } 
  
  else {
    categories.push(category);
  }

  state.Categories = categories;

  state.Loading = true;
  state.Results = null;
};

const SetSort = (state, action) => {
  state.Sort = action.payload;

  state.Loading = true;
  state.Results = null;
};

const SetFilter = (state, action) => {
  const data = action.payload;

  state.Results = data;
  state.Loading = false;
};

export { SetCity, SetCategory, SetFilter, SetSort };
