import React, { useState } from 'react';
import './Navbar.css';
import images from '../../constants/images';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

const Navbar = () => {
  const [toggoleMenu , setToggoleMenu] = useState(false);
  return (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="resturant logo" />
    </div>
      <ul className="app__navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Awards</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    <div className="app__navbar-login">
      <a href="">Login / Registration</a>
      <div/>
      <a href="#">book table</a>
    </div>
   <div className="app__navbar-menu">
    <GiHamburgerMenu fonsize={27} onClick={()=> setToggoleMenu(true)} />
    {toggoleMenu && (
    <div className="app__navbar-overlay flex__center slide-bottom">
      <MdOutlineRestaurantMenu className='close-icon' fonsize={27} onClick={()=>setToggoleMenu(false)}/>
    <ul className="app__navbar-menu-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Awards</a></li>
        <li><a href="#">Contact</a></li>
      </ul> 
        </div>
    )}
    </div>
  </nav>
)};

export default Navbar;
