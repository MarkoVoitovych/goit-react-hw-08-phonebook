import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import {
  StyledForm,
  Label,
  Input,
  Span,
  Button,
} from '../ContactForm/ContactForm.styled';

const Modal = ({ modalData, OnContactEdit, OnModalClose }) => {
  const { name, number, id } = modalData;

  return (
    <Formik
      initialValues={{ name, number, id }}
      onSubmit={(values, { resetForm }) => {
        OnContactEdit(values);
        resetForm();
      }}
    >
      {props => {
        return (
          <StyledForm>
            <Label>
              <Span>Name</Span>
              <Field
                as={Input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </Label>
            <Label>
              <Span>Number</Span>
              <Field
                as={Input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </Label>
            <Button type="submit" disabled={props.isSubmitting}>
              Edit contact
            </Button>
            <Button
              type="button"
              disabled={props.isSubmitting}
              onClick={OnModalClose}
            >
              Cancel
            </Button>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

Modal.propTypes = {
  OnModalClose: PropTypes.func.isRequired,
  OnContactEdit: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};

export default Modal;
