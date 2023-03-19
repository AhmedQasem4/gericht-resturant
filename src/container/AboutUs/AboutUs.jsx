import React from "react";
import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__aboutus section__padding app__bg">
    <div className="app__aboutus-overlay">
      <img src={images.G} alt="G logo" />
    </div>
    <div className="app__aboutus-content">
      <div className="app__aboutus-content-about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon logo" className="spoon__img" />
        <p className="p__opensans">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra
          Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec
          Aliquet Eu Proin Mauris Et.
        </p>
        <button className="custom__button">Know More</button>
      </div>
      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="" />
      </div>
      <div className="app__aboutus-content-history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon logo" className="spoon__img" />
        <p className="p__opensans">
          Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat.
          Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed
          Odio Nec Aliquet.
        </p>
        <button className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);
{
  /* <div className="app__aboutus_about">
          <h1>About Us</h1>
          <img src={images.spoon} alt="spoon logo" className="spoon__img" />
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button className="custom__button">Know More</button>
        </div> */
}
export default AboutUs;
