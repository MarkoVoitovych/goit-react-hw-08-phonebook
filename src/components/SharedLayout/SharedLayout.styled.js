import { NavLink } from 'react-router-dom';
import { AppBar } from '@mui/material';
import { styled as styledMui } from '@mui/system';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styledMui(AppBar)`
  position: static;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 2px solid black;
 `;

export const SiteNav = styled.nav`
  margin-left: 5px;
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  padding: 5px 0;
  color: black;
  font-size: 18px;
  text-decoration: none;
  &.active {
    color: yellow;
  }
`;
