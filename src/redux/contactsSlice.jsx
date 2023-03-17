import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(5),
          },
        };
      },
    },
    deleteContact(state, action) {
      //   const index = state.findIndex(contact => contact.id === action.payload);
      //   state.splice(index, 1);
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;
