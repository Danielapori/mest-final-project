import React from 'react';
import {  Link  } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
   
   const Menu = () => {
       return (
           <div>
               <Navbar collapseOnSelect expand="lg" bg="blue" >
                   <Container>
   
                       <Link to="/"><Navbar.Brand>Sacx</Navbar.Brand></Link>
                       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                       <Navbar.Collapse id="responsive-navbar-nav">
                           <Nav className="mr-auto">
                               <Nav.Link as={Link} to="/">Home</Nav.Link>
                               <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                               </Nav>
                               
                           <Nav>
                               <Nav.Link as={Link} to="signin">Sign In</Nav.Link>
                               <Nav.Link as={Link} to="join">Sign Up</Nav.Link>
                           </Nav>
                       </Navbar.Collapse>
                   </Container>
   
               </Navbar>
           </div>
       )
   }
   
   export default Menu;   
   
   