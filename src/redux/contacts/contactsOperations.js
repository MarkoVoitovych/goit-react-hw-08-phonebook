import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  editContactApi,
  fetchContactsApi,
  removeContactApi,
} from 'utils/connectionsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await fetchContactsApi();
      console.log('fetchedContact', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  // {
  //   condition: (_, { getState }) => {
  //     const { items } = getState().contacts;
  //     return !items.length;
  //   },
  // }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await addContactApi(contact);
      console.log('addedContact', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await editContactApi(contact);
      console.log('editedContact', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await removeContactApi(contactId);
      console.log('deletedContact', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
