const SetContact = (state, action) => {
    let data = action.payload;
    
    state.Contact = data;
    state.Loading = false;
    state.Loaded = true;
  };
  
  const UnsetContact = (state) => {
    state.Contact = null;
    state.Loading = true;
    state.Loaded = false;
  };
  
  const SetContactField = (state, action) => {
    let data = action.payload;
    state.Contact[data.Field] = data.Value;
  };
  
  const UnsetPrecontact = (state) => {
    state.Precontact = {};
  };
  
  const SetPrecontactField = (state, action) => {
    const { Field, Value } = action.payload;
    state.Precontact[Field] = Value;
  };
  
  export {
    SetContact,
    UnsetContact,
    SetContactField,
    UnsetPrecontact,
    SetPrecontactField,
  };