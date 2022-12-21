import { Component } from 'react';
import { Container, MainTitle, Title } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
