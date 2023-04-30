import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SharedLayout from './SharedLayout';
import HomePage from 'pages/home/HomePage';

import { selectIsAuth } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperations';

const RegisterPage = lazy(() => import('pages/register/RegisterPage'));
const LoginPage = lazy(() => import('pages/login/LoginPage'));
const ContactsPage = lazy(() => import('pages/contacts/ContactsPage'));

function App() {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const PrivateRoute = ({ component }) => {
    return isAuth ? component : <Navigate to="/" />;
  };

  const PublicRoute = ({ component, restricted }) => {
    return isAuth && restricted ? <Navigate to="/" /> : component;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PublicRoute component={<HomePage />} />} />
          <Route
            path="register"
            element={<PublicRoute restricted component={<RegisterPage />} />}
          />
          <Route
            path="login"
            element={<PublicRoute restricted component={<LoginPage />} />}
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          />
          <Route path="*" element={<Navigate to={isAuth ? '/' : '/login'} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
