import React from 'react';
import images from '../../constants/images';
import './MenuItem.css';

const MenuItem = ({name, kind,price}) => (
  <div className='app__menuitem'>
    <div className="app__menuitem-name">
      <h1 className="headtext__cormorant">{name}</h1>
      <p className='p__opensans'>{kind}</p>
    </div>
    <div className="app__menuitem-price">
      <div className='menuitem__line'/>
      <p className='p__cormorant'>{price}</p>
    </div>
  </div>
);

export default MenuItem;
