import React from 'react';
import './Navbar.css';
import images from '../../constants/images';

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="resturant logo" />
    </div>
    <div className="app__navbar-links">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Awards</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div className="app__navbar-login">
      <a href="">Login / Registration</a>
      <div/>
      <a href="#">book table</a>
    </div>
  </nav>
);

export default Navbar;
