import React from 'react';
import './header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className="image-container">
      <img src={assets.headre_banner} alt="Header Banner" className="image" />
      <div className="text-overlay">
        <p className='newArrival'>New Arrival</p>
        <h1>Discover Our <br />New Collection</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. 
        </p>
        <button className="overlay-button">BUY NOW</button>
      </div>
    </div>
  );
};

export default Header;
