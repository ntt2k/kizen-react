import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg'
import { faChartArea, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'shards-react';

const IconStyled = styled(FontAwesomeIcon)`
  margin-right: 6px;
`;

const Header = () => {
  return (
    <header>
      <Navbar>
        <NavbarBrand href="/">
          <img src={logo} alt="logo" />
          React
        </NavbarBrand>

        <Nav pills>
          <NavItem>
            <NavLink active href="/">
              <IconStyled icon={faChartArea} />
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/settings">
              <IconStyled icon={faCog} />
              Settings
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
