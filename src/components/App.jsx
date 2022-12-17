import { Component } from 'react';
import { Container, MainTitle, Title } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleContactAdd = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return '';
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleContactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm OnContactAdd={this.handleContactAdd} />

        <Title>Contacts</Title>
        <Filter value={filter} OnFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={contacts}
          filterValue={filter}
          OnContactDelete={this.handleContactDelete}
        />
      </Container>
    );
  }
}

export default App;
