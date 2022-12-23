import PropTypes from 'prop-types';
import { Item, Text, Button, BtnWrapper } from './ContactItem.styled';

const ContactItem = props => {
  const { id, name, number, OnContactDelete, OnModalOpen, setModalData } =
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
            OnModalOpen();
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
  OnModalOpen: PropTypes.func.isRequired,
};

export default ContactItem;
