import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";


const navbar = () => {
  return (
    <header>
        <Navbar bg="#f4ebe8" variant="light">
          <Container>
            <Navbar.Brand href="home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/Whishlist">Home</Nav.Link>
              <Nav.Link href="/AboutUs">Features</Nav.Link>
              <Nav.Link href="/Contact">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </header>
  );
}

export default navbar;