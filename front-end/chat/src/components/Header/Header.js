import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeProvider';
import logo from '../../images/logo.png';

const Nav = styled.nav`
  background-color: ${(props) => props.theme.primaryGreen};
  height: 100pt;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 15em;
  height: auto;
`;

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Nav theme={theme}>
      <a href="/">
        <Logo src={logo} />
      </a>
    </Nav>
  );
};
