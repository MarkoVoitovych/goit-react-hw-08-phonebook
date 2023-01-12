import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { Container, MainTitle, Title } from './ContactsPage.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ErrorMessage from 'components/ErrorMessage';
import Spiner from 'components/Spiner';

function ContactsPage() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>
        Contacts
        {isLoading && <Spiner />}
      </Title>
      <Filter />
      {error ? <ErrorMessage /> : <ContactList />}
    </Container>
  );
}

export default ContactsPage;
