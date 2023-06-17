import React from "react";
import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

export default function TransparentNavBar({ tabs }) {
  return (
    <Navbar className="navbar-transparent" expand="lg">
      <Container>
        <div className="row">
          <div className="col navbar-translate">
            <NavbarBrand href="#">Creative tim</NavbarBrand>
          </div>
          <div className="col-6 display-flex justify-content-center">
            <Nav navbar>
              {tabs.map((tab) => (
                <NavItem key={tab}>
                  <NavLink href={`#${tab}`}>{tab}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
          <div className="col display-flex justify-content-end">
            <Nav navbar>
              <NavItem>
                <NavLink href="#twitter">
                  <i className="fab fa-twitter"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#facebook">
                  <i className="fab fa-facebook-square"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#instagram">
                  <i className="fab fa-instagram"></i>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}
