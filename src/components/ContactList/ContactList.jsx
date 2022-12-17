import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { List } from './ContactList.styled';

export class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    filterValue: PropTypes.string.isRequired,
    OnContactDelete: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, filterValue, OnContactDelete } = this.props;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    return (
      <List>
        {filteredContacts.map(({ name, number, id }) => {
          return (
            <ContactItem
              name={name}
              number={number}
              id={id}
              key={id}
              OnContactDelete={OnContactDelete}
            />
          );
        })}
      </List>
    );
  }
}

export default ContactList;
