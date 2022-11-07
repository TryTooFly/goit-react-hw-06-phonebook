import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (contacts, { payload }) => {
      contacts.items.push(payload);
    },
    deleteContact: (contacts, { payload }) => {
      contacts.items = contacts.items.filter(item => item.id !== payload);
    },
    addFilter: (contacts, { payload }) => {
      contacts.filter = payload;
    },
  },
});

export const { addContact, deleteContact, addFilter } = contactSlice.actions;

export default contactSlice.reducer;
