import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectStatusContactsLoaded, selectError } from 'redux/selectors';
import { Container, MainTitle, Title } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const statusContactsLoaded = useSelector(selectStatusContactsLoaded);

  useEffect(() => {
    statusContactsLoaded && dispatch(fetchContacts());
  }, [statusContactsLoaded, dispatch]);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {error ? <h2>Loading error: {error}</h2> : <ContactList />}
    </Container>
  );
}

export default App;
