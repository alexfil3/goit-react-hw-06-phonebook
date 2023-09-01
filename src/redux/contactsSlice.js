import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      state.contacts
        .map(({ name }) => name.toLocaleLowerCase())
        .includes(action.payload.name.toLocaleLowerCase())
        ? alert(`${action.payload.name} is already in contacts`)
        : state.contacts.push({ ...action.payload, id: nanoid() });
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

export const getContacts = state => state.contacts.contacts;

// Another option of using addContact
//  addContact: {
//       reducer: (state, action) => {
//         state.contacts
//           .map(({ name }) => name.toLocaleLowerCase())
//           .includes(action.payload.name.toLocaleLowerCase())
//           ? alert(`${action.payload.name} is already in contacts`)
//           : state.contacts.push(action.payload);
//       },
//       prepare: data => {
//         return { payload: { ...data, id: nanoid() } };
//       },
//     },
