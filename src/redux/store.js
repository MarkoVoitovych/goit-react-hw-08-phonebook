import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { modalReducer } from './modalSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
