import React from 'react';
import './SpecialMenu.css';
import SubHeading from './../../components/SubHeading/SubHeading';
import MenuItem from './../../components/Menuitem/MenuItem';
import images from '../../constants/images';

const SpecialMenu = () => (
  <div className="app__specialmenu section__padding">
    <div className="app__specialmenu-header">
      <SubHeading title="Menu That Fits Your Palate" />
      <h1 className='headtext__cormorant'>Today's special</h1>
    </div>
    <div className="app__specialmenu-body section__padding">
      <div className="app__specialmenu-freshfruits">
        <h1 className='app__specialmenu-freshfruits_heading'>Fresh Fruits</h1>
        <MenuItem name="Orange" kind="bottle" price="10$" />
        <MenuItem name="Guava"  kind="cup" price="7$"/>
        <MenuItem name="banana"  kind="bottle" price="12$"/>
        <MenuItem name="Strawberry" kind="cup" price="8$"/>
        <MenuItem name="pomegranate"  kind="bottle" price="15$"/>
      </div>
      <div className="app__specialmenu-image">
        <img src={images.menu} alt="menu logo" />
      </div>
      <div className="app__specialmenu-hotdrinks">
      <h1 className='app__specialmenu-freshfruits_heading'>Hot Drinks</h1>
      <MenuItem name="tea" kind="cup" price="3$" />
        <MenuItem name="coffe"  kind="cup" price="6$"/>
        <MenuItem name="orchid"  kind="bottle" price="10$"/>
        <MenuItem name="coffe" kind="cup" price="10$"/>
        <MenuItem name="lemon"  kind="bottle" price="8$"/>
      </div>
    </div>
    <div className="app__specialmenu-footer">
      <button className="custom__button special__menu-button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
