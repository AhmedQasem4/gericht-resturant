import React from "react";
import images from "../../constants/images";
import "./Chef.css";
import SubHeading from "./../../components/SubHeading/SubHeading";

const Chef = () => (
  <div className="app__chef app__bg section__padding">
    <div className="app__chef-image">
      <img src={images.chef} alt="chef image" />
    </div>
    <div className="app__chef-content">
      <SubHeading title="Chef's words" />
      <h1 style={{marginBottom: "2rem",}} className="headtext__cormorant">What we belive in</h1>
      <div className="app__chef-content_quote">
        <img src={images.quote} alt="quote logo" />
        <p className="p__opensans">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .
        </p>
      </div>
        <p className="app__chef-content_p">
          Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit.
          Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie
          Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.
        </p>
      <div className="app__chef-content_sign">
        <p className="chef_name">Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="chef signature" />
      </div>
    </div>
  </div>
);

export default Chef;
