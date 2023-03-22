import React from "react";

import "./Laurels.css";
import SubHeading from "./../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import Award from "../../components/Awards/Award";
const Laurels = () => (
  <div className="app__Laurels section__padding app__bg">
    <div className="app__lauerls-content">
      <div className="app__laurels-header">
        <SubHeading title="Award & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
      </div>
      <div className="app__laurels-award">
        <Award
          imgUrl={images.award02}
          title="Bib Gourmond"
          discription="Lorem Ipsum Dolor Sit Amet, Consectetur."
        />
        <Award
          imgUrl={images.award01}
          title="Rising Star"
          discription="Lorem Ipsum Dolor Sit Amet, Consectetur."
        />
        <Award
          imgUrl={images.award05}
          title="AA Hospitality"
          discription="Lorem Ipsum Dolor Sit Amet, Consectetur."
        />
        <Award
          imgUrl={images.award03}
          title="Outstanding Chef"
          discription="Lorem Ipsum Dolor Sit Amet, Consectetur."
        />
      </div>
    </div>
    <div className="app__laurels-image">
      <img src={images.laurels} alt="logo" />
    </div>
  </div>
);

export default Laurels;
