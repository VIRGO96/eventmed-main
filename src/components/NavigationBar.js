import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import { VscAccount } from "react-icons/vsc";

// Be sure to utilize container fluid!
const NavigationBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand id="evenimed-logo" href="/">
            EveniMed
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link href="/about_us">About Us</Nav.Link>
                <Nav.Link href="/search">Find Event</Nav.Link>
              <Nav.Link href="/contact_us">Contact Us</Nav.Link>
            </Nav>

            <Nav.Link id="myAccount-button" href="/login">
              <VscAccount /> My Account
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
