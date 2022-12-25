import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import {
  Overlay,
  StyledModal,
  StyledForm,
  Label,
  Input,
  Span,
  Button,
} from './Modal.styled';

function Modal({ modalData, OnContactEdit, toggleModal }) {
  const { name, number, id } = modalData;

  const handleCloseModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => window.removeEventListener('keydown', handleCloseModal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <Overlay onClick={handleCloseModal}>
      <StyledModal>
        <Formik
          initialValues={{ name, number, id }}
          onSubmit={values => {
            OnContactEdit(values);
            toggleModal();
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
                    autoFocus
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
                <div>
                  <Button type="submit" disabled={props.isSubmitting}>
                    Edit contact
                  </Button>
                  <Button
                    type="button"
                    disabled={props.isSubmitting}
                    onClick={toggleModal}
                  >
                    Cancel
                  </Button>
                </div>
              </StyledForm>
            );
          }}
        </Formik>
      </StyledModal>
    </Overlay>,
    document.querySelector('#modal')
  );
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  OnContactEdit: PropTypes.func.isRequired,
  modalData: PropTypes.object.isRequired,
};

export default Modal;
