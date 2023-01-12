import { useDispatch } from 'react-redux';
import AuthForm from 'components/AuthForm/AuthForm';
import { email, name, password } from 'assets/formFields';
import { registerUser } from 'redux/auth/authOperations';

const formOptions = [
  { ...name, placeholder: 'Enter your name', autoFocus: true },
  {
    ...email,
    placeholder: 'Enter your email',
  },
  {
    ...password,
    placeholder: 'Enter password',
  },
];

const initialValues = {
  name: '',
  email: '',
  password: '',
};

function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = user => {
    dispatch(registerUser(user));
  };

  return (
    <>
      <h1>RegisterPage</h1>
      <AuthForm
        options={formOptions}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        buttonTitle="Register"
      />
    </>
  );
}

export default RegisterPage;
