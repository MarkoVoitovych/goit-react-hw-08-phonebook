import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 2px solid black;
`;

export const SiteNav = styled.nav`
  margin-left: 15px;
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  padding: 5px 0;
  color: black;
  font-size: 18px;
  text-decoration: none;

  &.active {
    color: red;
  }
`;
