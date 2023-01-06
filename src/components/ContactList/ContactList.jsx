import { useState } from 'react';
import { List } from './ContactList.styled';
import ContactItem from '../ContactItem';
import Modal from '../Modal';
import { useSelector } from 'react-redux';
import { getContacts, getFilter, getModalStatus } from 'redux/selectors';

function ContactList() {
  const [modalData, setModalData] = useState({});

  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const isModalOpen = useSelector(getModalStatus);

  const filteredContacts = contacts?.filter(contact =>
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
            />
          );
        })}
      </List>
      {isModalOpen && <Modal modalData={modalData} />}
    </>
  );
}

export default ContactList;
