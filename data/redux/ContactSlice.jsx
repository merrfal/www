import { createSlice } from '@reduxjs/toolkit';
import { ContactDefaultState } from './Defaults';

import {
  SetContact as CallSetContact,
  UnsetContact as CallUnsetContact,
  SetContactField as CallSetContactField,
  UnsetPrecontact as CallUnsetPrecontact,
  SetPrecontactField as CallSetPrecontactField,
} from './controllers';

export const ContactSlice = createSlice({
  name: 'Contact',
  initialState: ContactDefaultState,
  reducers: {
    SetContact: (state, action) => CallSetContact(state, action),
    UnsetContact: (state, action) => CallUnsetContact(state, action),
    SetContactField: (state, action) => CallSetContactField(state, action),
    SetPrecontactField: (state, action) => CallSetPrecontactField(state, action),
    UnsetPrecontact: (state, action) => CallUnsetPrecontact(state, action),
  },
});

export const { 
    SetContact, 
    UnsetContact, 
    SetContactField, 
    SetPrecontactField,
    UnsetPrecontact,
    
} = ContactSlice.actions;

export default ContactSlice.reducer;