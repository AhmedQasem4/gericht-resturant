import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./Gallery.css";
import SubHeading from "./../../components/SubHeading/SubHeading";
import images from "../../constants/images";
const Gallery = () => {
  return (
    <div className="app__photogallery section__padding">
      <div className="app__photogallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </p>
        <button type="button" className="custom__button">view More</button>
      </div>
      <div className="app__photogallery-images"></div>
    </div>
  );
};
export default Gallery;
