import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SharedLayout from './SharedLayout/SharedLayout';
import { refreshUser } from 'redux/auth/authOperations';
import { selectUserToken } from 'redux/auth/authSelectors';

const RegisterPage = lazy(() => import('pages/register/RegisterPage'));
const LoginPage = lazy(() => import('pages/login/LoginPage'));
const ContactsPage = lazy(() => import('pages/contacts/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const userToken = useSelector(selectUserToken);
  useEffect(() => {
    userToken && dispatch(refreshUser(userToken));
  }, [dispatch, userToken]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
