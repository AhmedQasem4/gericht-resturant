import React from 'react';
import images from '../../constants/images';
import './Award.css';
const Award = ({imgUrl, title , discription}) => {
    return ( 
        <div className="app__award">
            <img className='image' src={imgUrl} />
            <div className="app__award-content">
                <p className='p__cormorant'>{title}</p>
                <p className='p__opensans'>{discription}</p>
            </div>
        </div>
     );
}
 
export default Award;