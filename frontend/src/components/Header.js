import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './Header.css'; // ✅ Make sure this is present

function Header() {
  return (
    <Navbar expand="lg" variant="dark" className="w-100 custom-navy">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#">
          <img
            src="https://ossimg.tirangaagent.com/Tiranga/other/h5setting_20231018190159b8rt.png"
            alt="logo"
            height="40"
          />
        </Navbar.Brand>
        <Link to="/login"><button className="custom-btn">Login</button></Link>
      </Container>
    </Navbar>
  );
}

export default Header;
