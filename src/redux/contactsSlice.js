const { createSlice, nanoid } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { name: 'Poly', number: 11111111, id: 458305305 },
    { name: 'Mango', number: 222222222, id: 23498349294 },
  ],
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        return [...state, payload];
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
    editContact(state, { payload }) {
      return state.map(contact => {
        if (contact.id !== payload.id) {
          return contact;
        }
        return payload;
      });
    },
  },
});

export const { addContact, deleteContact, editContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
