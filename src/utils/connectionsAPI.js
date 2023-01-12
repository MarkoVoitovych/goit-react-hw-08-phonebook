import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(userToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${userToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUserApi = async userData => {
  const { data } = await axios.post('/users/signup', userData);
  token.set(data.token);
  return data;
};

export const loginUserApi = async userData => {
  const { data } = await axios.post('/users/login', userData);
  token.set(data.token);
  return data;
};

export const logoutUserApi = async () => {
  await axios.post('/users/logout');
  token.unset();
};

export const refreshUserApi = async userToken => {
  token.set(userToken);
  const { data } = await axios.get('/users/current');
  return data;
};

export const fetchContactsApi = async () => {
  return await axios.get('/contacts');
};

export const addContactApi = async contact => {
  return await axios.post('/contacts', contact);
};

export const editContactApi = async contact => {
  // return await axios. ()
};

export const removeContactApi = async contactId => {
  return await axios.delete('/contacts', contactId);
};
