import { useState } from 'react';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactItem from '../ContactItem';
import Modal from '../Modal';

function ContactList({
  OnContactDelete,
  OnContactEdit,
  filterValue,
  contacts,
}) {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

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
              setModalData={setModalData}
              toggleModal={toggleModal}
              OnContactDelete={OnContactDelete}
            />
          );
        })}
      </List>
      {isModalOpen && (
        <Modal
          modalData={modalData}
          toggleModal={toggleModal}
          OnContactEdit={OnContactEdit}
        />
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filterValue: PropTypes.string.isRequired,
  OnContactDelete: PropTypes.func.isRequired,
  OnContactEdit: PropTypes.func.isRequired,
};

export default ContactList;
