const SetFilterTerm = (state, action) => {
    state.Term = action.payload;
    state.Loading = true;
    state.Results = null;
  }
  
  const SetCityFilterTerm = (state, action) => {
    state.CityTerm = action.payload;
    state.Loading = true;
    state.Results = null;
  }
  
  const SetFilter = (state, action) => {
    const data = action.payload;
    state.Results = data;
    state.Loading = false;
  }
  
  export {SetFilterTerm, SetFilter, SetCityFilterTerm };
  