import { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactItem from '../ContactItem';
import Modal from '../Modal';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    filterValue: PropTypes.string.isRequired,
    OnContactDelete: PropTypes.func.isRequired,
    OnContactEdit: PropTypes.func.isRequired,
  };

  state = {
    modalData: null,
    isModalOpen: false,
  };

  setModalData = contact => {
    this.setState({ modalData: contact });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { isModalOpen, modalData } = this.state;

    const { OnContactDelete, OnContactEdit, filterValue, contacts } =
      this.props;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
      <>
        <List>
          {filteredContacts.map(({ name, number, id }) => {
            return (
              <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
                setModalData={this.setModalData}
                toggleModal={this.toggleModal}
                OnContactDelete={OnContactDelete}
              />
            );
          })}
        </List>
        {isModalOpen && (
          <Modal
            modalData={modalData}
            toggleModal={this.toggleModal}
            OnContactEdit={OnContactEdit}
          />
        )}
      </>
    );
  }
}

export default ContactList;
