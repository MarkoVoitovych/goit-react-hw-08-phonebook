import { Component } from 'react';
import { Container, MainTitle, Title } from './App.styled';
import * as mockAPI from '../utils/mockAPI';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import ErrorMessage from './ErrorMessage/ErrorMessage';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    error: null,
  };

  async componentDidMount() {
    try {
      const { data } = await mockAPI.getContacts();
      this.setState({ contacts: data });
    } catch (error) {
      this.setState({
        error: 'Ooops! Something went wrong. Try again later...',
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleContactAdd = async contactInfo => {
    if (
      this.state.contacts.find(contact => contact.name === contactInfo.name)
    ) {
      alert(`${contactInfo.name} is already in contacts.`);
      return '';
    }
    const newContact = await mockAPI.addContact(contactInfo);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact.data],
    }));
  };

  handleContactDelete = async id => {
    try {
      const removedContact = await mockAPI.deleteContact(id);

      this.setState(prevState => ({
        contacts: prevState.contacts.filter(
          contact => contact.id !== removedContact.data.id
        ),
      }));
    } catch (error) {
      this.setState({
        error: 'Ooops! Something went wrong. Try again later...',
      });
    }
  };

  handleFilterChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleErrorMsgClose = () => {
    this.setState({ error: null });
  };

  render() {
    const { contacts, filter, error } = this.state;
    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm OnContactAdd={this.handleContactAdd} />
        <Title>Contacts</Title>
        <Filter value={filter} OnFilterChange={this.handleFilterChange} />
        {error ? (
          <ErrorMessage
            error={error}
            onErrBtnClick={this.handleErrorMsgClose}
          />
        ) : (
          <ContactList
            contacts={contacts}
            filterValue={filter}
            OnContactDelete={this.handleContactDelete}
          />
        )}
      </Container>
    );
  }
}

export default App;
