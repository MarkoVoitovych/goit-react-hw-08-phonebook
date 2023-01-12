import { useDispatch } from 'react-redux';
import AuthForm from 'components/AuthForm/AuthForm';
import { email, password } from 'assets/formFields';
import { loginUser } from 'redux/auth/authOperations';

const formOptions = [
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
  email: '',
  password: '',
};

function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = userData => {
    dispatch(loginUser(userData));
  };

  return (
    <>
      <h1>LoginPage</h1>
      <AuthForm
        options={formOptions}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        buttonTitle="Login"
      />
    </>
  );
}

export default LoginPage;
