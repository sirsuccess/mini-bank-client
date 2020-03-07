import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from "reactstrap";
import { NavLink } from "react-router-dom";

import "./navbar.scss";

const AppNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-section container-fluid bg-white ">
      <div className="stick-top">
        <Navbar  light expand="md">
          <NavbarBrand href="/" className="navbar-brand">
            <span>React</span> Bank
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="mt-4">
            <Nav className="mr-auto ml-auto" navbar>
              <NavItem>
                <NavLink to="/exchange">Exchage Rate</NavLink>
              </NavItem>
            </Nav>
            <NavbarText className="mr-3">
              <NavLink to="/login">
                <i class="fas fa-sign-in-alt"></i> Login
              </NavLink>
            </NavbarText>
            <NavbarText>
              <NavLink to="/register">
                {" "}
                <i class="fa fa-user-plus"></i> Sign up 
              </NavLink>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default AppNavbar;
