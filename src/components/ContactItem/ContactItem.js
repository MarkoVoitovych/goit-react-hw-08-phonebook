import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Item } from './ContactItem.styled';

export class ContactItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    OnContactDelete: PropTypes.func.isRequired,
  };

  render() {
    const { id, name, number, OnContactDelete } = this.props;
    return (
      <Item>
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
  }
}

export default ContactItem;
