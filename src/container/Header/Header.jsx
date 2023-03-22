import React from "react";
import "./Header.css";
import images from "../../constants/images";
import SubHeading from './../../components/SubHeading/SubHeading';

const Header = () => (
  <div className="app__header section__padding">
    <div className="app__header-content">
      <SubHeading title="Chase The New Flavour" />
      <h1 className="app__header-heading">The Key To Fine Dining</h1>
      <p className="app__header-paragraph">
        Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat
        Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet
        Tellus
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__header-image">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
