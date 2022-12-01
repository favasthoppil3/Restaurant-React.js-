import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { BsCart4 } from "react-icons/bs";
import './Header.css';


function Header() {
  return (
    <div>
      <Navbar bg="" className='shadow bg-white fixed-top ' variant="dark">
        <Container>
          <Navbar.Brand href="#home" bg="info" className='fw-bold text-danger fs-4'>Restauarant</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='Home text-danger fw-bold'>Home</Nav.Link>
            <Nav.Link href="#features" className='Home text-danger fw-bold'>Features</Nav.Link>
            <Nav.Link href="#pricing"className='Home text-danger fw-bold'>Pricing</Nav.Link>
            
          </Nav>
          <Nav.Link href="#pricing"className='Home text-dark fs-4 ms-4 mb-1'><BsCart4/></Nav.Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
