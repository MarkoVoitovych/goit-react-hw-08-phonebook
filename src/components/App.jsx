import { useState, useEffect } from 'react';
import { Container, MainTitle, Title } from './App.styled';
import * as mockAPI from '../utils/mockAPI';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import ErrorMessage from './ErrorMessage/ErrorMessage';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await mockAPI.getContacts();
        setContacts(data);
      } catch (error) {
        setError('Ooops! Something went wrong. Try again later...');
      }
    })();
  }, []);

  const handleContactAdd = async contactInfo => {
    if (contacts.find(contact => contact.name === contactInfo.name)) {
      alert(`${contactInfo.name} is already in contacts.`);
      return '';
    }
    const { data } = await mockAPI.addContact(contactInfo);
    setContacts(prevState => [...prevState, data]);
  };

  const handleContactEdit = async contact => {
    const { data } = await mockAPI.editContact(contact);
    setContacts(prevState =>
      prevState.map(contact => (contact.id === data.id ? data : contact))
    );
  };

  const handleContactDelete = async id => {
    try {
      const { data } = await mockAPI.deleteContact(id);

      setContacts(prevState =>
        prevState.filter(contact => contact.id !== data.id)
      );
    } catch (error) {
      setError('Ooops! Something went wrong. Try again later...');
    }
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm OnContactAdd={handleContactAdd} />
      <Title>Contacts</Title>
      <Filter value={filter} OnFilterChange={handleFilterChange} />
      {error ? (
        <ErrorMessage error={error} setError={() => setError(null)} />
      ) : (
        <ContactList
          contacts={contacts}
          filterValue={filter}
          OnContactDelete={handleContactDelete}
          OnContactEdit={handleContactEdit}
        />
      )}
    </Container>
  );
}

export default App;
