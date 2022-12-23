import { createPortal } from 'react-dom';
import { Component } from 'react';
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

class Modal extends Component {
  static propTypes = {
    toggleModal: PropTypes.func.isRequired,
    OnContactEdit: PropTypes.func.isRequired,
    modalData: PropTypes.object.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  handleCloseModal = e => {
    e.preventDefault();
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  render() {
    const { modalData, OnContactEdit, toggleModal } = this.props;
    const { name, number, id } = modalData;

    return createPortal(
      <Formik
        initialValues={{ name, number, id }}
        onSubmit={values => {
          OnContactEdit(values);
          toggleModal();
        }}
      >
        {props => {
          return (
            <Overlay onClick={this.handleCloseModal}>
              <StyledModal>
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
              </StyledModal>
            </Overlay>
          );
        }}
      </Formik>,
      document.querySelector('#modal')
    );
  }
}

export default Modal;
