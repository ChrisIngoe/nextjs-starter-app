import React, { useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import UserContext from '../../components/hooks/userContext';

function NavBar() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Navbar color="dark" dark expand="sm" fixed="top">
        <NavbarBrand href="/">
          <img src="/logo.svg" alt="Logo" className="logo" />
          NextJS Starter
        </NavbarBrand>
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#" className="d-none d-sm-block"></NavLink>
            </NavItem>
          </Nav>
          <UncontrolledDropdown inNavbar>
            <DropdownToggle caret nav className="text-secondary">
              <NavbarText className="align-self-center text-left font-weight-bold">
                <img
                  src="/images/profile1.jpg"
                  className="border rounded-circle img-42 img-fluid mr-1"
                />
                {user}
              </NavbarText>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag="div">
                <NavLink href="/page/profile" className="text-dark">
                  <i className="fas fa-user"></i> Profile
                </NavLink>
              </DropdownItem>
              <DropdownItem tag="div">
                <NavLink href="/page/setting" className="text-dark">
                  <i className="fas fa-cog"></i> Setting
                </NavLink>
              </DropdownItem>
              <DropdownItem tag="div">
                <NavLink href="/page/login" className="text-dark">
                  <i className="fas fa-home"></i> Logout
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
