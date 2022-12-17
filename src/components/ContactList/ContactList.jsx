import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { List, Item } from './ContactList.styled';

export class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  render() {
    const { contacts, OnContactDelete } = this.props;
    return (
      <List>
        {contacts.map(({ name, number, id }) => {
          return (
            <Item key={id}>
              <p>
                {name}: <span>{number}</span>
              </p>
              <button
                type="button"
                onClick={() => {
                  OnContactDelete(id);
                }}
              >
                Delete
              </button>
            </Item>
          );
        })}
      </List>
    );
  }
}

export default ContactList;
