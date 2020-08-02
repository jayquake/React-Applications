import React from "react";
import {Link} from  'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const NavbarBootstrap = (props)=> {
    return(

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home" className={'text-dark'}>
        COVID-MX
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Patient</Nav.Link>
          <Nav.Link href="#pricing">Information</Nav.Link>
          <NavDropdown title="More Information" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Path</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
             Documentation
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"> </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Details
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Sign Up</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Log In
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    )

}

export default NavbarBootstrap

