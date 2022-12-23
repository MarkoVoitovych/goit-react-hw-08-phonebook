import PropTypes from 'prop-types';
import { Item, Text, Button, BtnWrapper } from './ContactItem.styled';

const ContactItem = props => {
  const { id, name, number, OnContactDelete, OnContactEdit } = props;

  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <BtnWrapper>
        <Button
          type="button"
          onClick={() => {
            OnContactEdit();
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
  OnContactEdit: PropTypes.func.isRequired,
};

export default ContactItem;
