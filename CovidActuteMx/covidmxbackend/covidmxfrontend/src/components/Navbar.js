import React from "react";
import {Link} from  'react-router-dom'
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Navbar =() => {
    return(

     <Navbar bg="dark" variant="dark">
    <Navbar.Brand ><Link to={'/'}>Home</Link></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to={'/'}>Home</Link></Nav.Link>
      <Nav.Link href="#features"><Link to={'/about'}>About</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to={'/shop'}>Shop</Link></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    )
}

export default Navbar