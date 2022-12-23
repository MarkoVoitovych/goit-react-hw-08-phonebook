import PropTypes from 'prop-types';
import { Item, Text, Button, BtnWrapper } from './ContactItem.styled';

const ContactItem = props => {
  const { id, name, number, OnContactDelete, toggleModal, setModalData } =
    props;

  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <BtnWrapper>
        <Button
          type="button"
          onClick={() => {
            toggleModal();
            setModalData({ id, name, number });
          }}
        >
          Edit
        </Button>
        <Button
          type="button"
          onClick={() => {
            OnContactDelete(id);
          }}
        >
          Delete
        </Button>
      </BtnWrapper>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  OnContactDelete: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  setModalData: PropTypes.func.isRequired,
};

export default ContactItem;
