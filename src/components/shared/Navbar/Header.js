import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import logo from '../../../Img/logo.png';
import logo2 from '../../../Img/Ellipse 1.png';
import logo3 from '../../../Img/Layer 4.png';
import logo1 from '../../../Img/Layer 5.png';


const Header = () => {
  return (
    <div>
      <Navbar
        // fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="/">
          <img src={logo} width="150" height="47" className="d-inline-block align-top" alt="home" />          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto "  >
              <Nav.Link href="/" style={{ color: "#000" }}>Home</Nav.Link>
              <Nav.Link href="about" style={{ color: "#000" }}>About</Nav.Link>
              <Nav.Link href="blog" style={{ color: "#000" }}>Courses</Nav.Link>
              <Nav.Link href="projects" style={{ color: "#000" }}>Projects</Nav.Link>
              <Nav.Link href="contact" style={{ color: "#000" }}>Contact</Nav.Link>
            </Nav>
            <button  className='btn btn-light-warning mx-auto  mt-3'><img className='Logo-img' src={logo3} alt=""/> </button> 
            <button  className='btn btn-light-warning mx-auto  mt-3'><img className='Logo-img' src={logo1} alt=""/> </button>  
            <button  className='btn btn-light-warning mx-auto  mt-3'><img className='Logo-img' src={logo2} alt=""/> </button> 
            
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
