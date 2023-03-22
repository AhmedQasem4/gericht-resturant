import React from 'react';
import images from '../../constants/images';

const SubHeading = ({title}) => (
  <>
    <p className='p__cormorant'>{title}</p>
    <img  className='spoon__img' src={images.spoon} alt="spoon logo" />
  </>
);

export default SubHeading;
