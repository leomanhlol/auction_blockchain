import React from 'react'
import {Navbar, Nav,Row, Container} from 'react-bootstrap';

function Header() {
  return (
    
        <header>
            <Navbar bg="dark" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="/">Auction</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      
        <Nav.Link href="#home">Create NFT</Nav.Link>
        <Nav.Link href="#link">My NFT</Nav.Link>
        <Nav.Link href="#home">About</Nav.Link>
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
   
  )
}

export default Header