import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeProvider';

const Nav = styled.nav`
  background-color: ${props => props.theme.primaryGreen};
  height: 80pt;
`;

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Nav theme={theme}>
      <div>
        <a href="/">
          Logo
        </a>
      </div>
    </Nav>
  );
};
