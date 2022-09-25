import React from 'react'
import {Navbar} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
const NavigationBar = () => {




  return (
      <Navbar sticky="top"  bg="light"  expand="md" >
            <Container>
        <Navbar.Brand href="#home">Some Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#qualifications">Qualifications</Nav.Link>
            <Nav.Link href="#ourwork">Our work</Nav.Link>
            <Nav.Link href="#reviews">Reviews</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
   
  )
}

export default NavigationBar