import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './FindUs.css';
const FindUs = () => (
  <div className='app__findus section__padding app__bg'>
    <div className="app__findus-content">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant">Find Us</h1>
      <p style={{margin: "1rem 0"}} className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
      <h3 className='opening__hours-heading'>Opening Hours</h3>
      <div className="opening__hours">
        <p className="p__opensans">Mon - Fri: 10:00 Am - 02:00 Am</p>
        <p className="p__opensans">Sat - Sun: 10:00 Am - 03:00 Am</p>
      </div>
      <button className="custom__button">Visit Us</button>
    </div>
    <div className="app__findus-image">
      <img src={images.findus} alt="find us image" />
    </div>
  </div>
);

export default FindUs;
