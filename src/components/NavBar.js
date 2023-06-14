import React from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  Nav,
  Container,
} from "reactstrap";

function NavBar() {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar className="fixed-top nav-bar-section" expand="lg">
      <Container>
        <Nav navbar>
          <UncontrolledDropdown nav>
            <DropdownToggle
              caret
              color="default"
              nav
              onClick={(e) => e.preventDefault()}
              className="dropdown-btn">
              <i className="now-ui-icons files_paper mr-1"></i>
              <p className="text">Sections</p>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => scrollToElement("headers")}>
                <i className="now-ui-icons shopping_box mr-1"></i>
                Headers
              </DropdownItem>
              <DropdownItem onClick={() => scrollToElement("features")}>
                <i className="now-ui-icons ui-2_settings-90 mr-1"></i>
                Features
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
