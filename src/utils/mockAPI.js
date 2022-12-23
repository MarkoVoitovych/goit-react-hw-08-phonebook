import axios from 'axios';

axios.defaults.baseURL = 'https://63a59c54f8f3f6d4abfae4ab.mockapi.io/';

export function getContacts() {
  const contacts = axios.get('/contacts');
  return contacts;
}

export function addContact(contact) {
  const newContact = axios.post('/contacts', contact);
  return newContact;
}

export function deleteContact(id) {
  const removedContact = axios.delete(`/contacts/${id}`);
  return removedContact;
}
