const { createSlice } = require('@reduxjs/toolkit');

const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    toggleModal(state, _) {
      return !state;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
