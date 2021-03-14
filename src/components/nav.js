import React, { useState } from "react";
import styled from "styled-components";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavComponent() {
  const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    background: transparent;
    &:hover {
      text-decoration: none;
      color: black;
      border-bottom: 1px solid black;
    }
  `;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Azfarul Matin</NavbarBrand>
      {/* <Collapse isOpen={isOpen} navbar> */}
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <StyledLink to="/" style={{ marginRight: "8px" }}>
              Home
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/category/animals" style={{ marginRight: "8px" }}>
              Animals
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink
              to="/category/cityscapes"
              style={{ marginRight: "8px" }}
            >
              Cityscapes
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink
              to="/category/daily-scenes"
              style={{ marginRight: "8px" }}
            >
              Daily-Scenes
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink
              to="/category/exhibitions"
              style={{ marginRight: "8px" }}
            >
              Exhibitions
            </StyledLink>
          </NavItem>{" "}
          <NavItem>
            <StyledLink to="/category/portraits" style={{ marginRight: "8px" }}>
              Portraits
            </StyledLink>
          </NavItem>{" "}
          <NavItem>
            <StyledLink to="/category/sports" style={{ marginRight: "8px" }}>
              Sports
            </StyledLink>
          </NavItem>
        </Nav>
        <NavbarText>Photographer.</NavbarText>
        {/* </Collapse> */}
      </Collapse>
    </Navbar>
  );
}

export default NavComponent;
