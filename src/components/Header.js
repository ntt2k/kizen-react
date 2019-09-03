import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { faChartArea, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'shards-react';

const IconStyled = styled(FontAwesomeIcon)`
  margin-right: 6px;
`;

const Header = ({ location }) => {
  return (
    <header>
      <Navbar>
        <NavbarBrand>
          <img src={logo} alt="logo" />
          React
        </NavbarBrand>

        <Nav pills>
          <NavItem>
            <Link to="/">
              <NavLink active={location.pathname === '/'}>
                <IconStyled icon={faChartArea} />
                Dashboard
              </NavLink>
            </Link>
          </NavItem>

          <NavItem>
            <Link to="/settings">
              <NavLink active={location.pathname === '/settings'}>
                <IconStyled icon={faCog} />
                Settings
              </NavLink>
            </Link>
          </NavItem>
        </Nav>
        
      </Navbar>
    </header>
  );
};

export default withRouter(Header);
