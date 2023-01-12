import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, StyledLink, Header, SiteNav } from './SharedLayout.styled';

function SharedLayout() {
  return (
    <Container>
      <Header>
        <SiteNav>
          <StyledLink to="/contacts">contacts</StyledLink>
        </SiteNav>
        <SiteNav>
          <StyledLink to="/register">register</StyledLink>
          <StyledLink to="/login">login</StyledLink>
        </SiteNav>
        <UserMenu />
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default SharedLayout;
