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
                               <Link to="/"><Nav.Link>Home</Nav.Link></Link>
                               <Link to="/about"><Nav.Link>About Us</Nav.Link></Link>
                               </Nav>
                               
                           <Nav>
                               <Link to="/signin"><Nav.Link>Sign In</Nav.Link></Link>
                               <Link to="/join"><Nav.Link>Sign Up</Nav.Link></Link>
                           </Nav>
                       </Navbar.Collapse>
                   </Container>
   
               </Navbar>
           </div>
       )
   }
   
   export default Menu;   
   
   