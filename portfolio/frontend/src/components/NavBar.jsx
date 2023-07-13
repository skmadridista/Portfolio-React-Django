import React, { useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import '../static/css/NavBar.css'
import Contact from './Contact';

const NavBar = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactToggle = () => {
    setShowContact(!showContact);
  };

  const handleContactClose = () => {
    setShowContact(false);
  };

  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="50"
            viewBox="0 0 150 50"
        
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#92E9D6" />
                <stop offset="100%" stopColor="#7AE1C7" />
              </linearGradient>
            </defs>
            <rect width="150" height="50" fill="url(#gradient)" rx="8" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".35em"
              fill="#FFF"
              fontFamily="Arial, sans-serif"
              fontSize="24"
            >
              SK
            </text>
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className='ms-auto'>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link onClick={handleContactToggle}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Contact show={showContact} handleClose={handleContactClose} />
    </>
  );
};

export default NavBar;
