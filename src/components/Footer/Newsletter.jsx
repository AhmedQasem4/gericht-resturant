import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__footer-newsletter'>
    <SubHeading title="Newsletter" />
    <h1 style={{marginTop: "2rem"}} className="headtext__cormorant">Subscribe to our news letter</h1>
    <p className="p__opensans">And Never Miss latest Updates</p>
    <div className="app__footer-newsletter_input">
    <input type="text" placeholder='Enter your email address' />
    <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
