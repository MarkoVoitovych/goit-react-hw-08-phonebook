import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { Container, StyledLink, Header, SiteNav } from './SharedLayout.styled';

function SharedLayout() {
  const isAuth = useSelector(selectIsAuth);

  return (
    <Container>
      <Header>
        <SiteNav>
          <StyledLink to="/">Home</StyledLink>
          {isAuth && <StyledLink to="/contacts">contacts</StyledLink>}
        </SiteNav>
        {!isAuth && (
          <SiteNav>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
          </SiteNav>
        )}
        {isAuth && <UserMenu />}
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default SharedLayout;
