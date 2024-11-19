import React from 'react';
import './ranges.css';
import { assets } from '../../assets/assets';

const Ranges = () => {
  const rooms = [
    {
      image: assets.dining_img,
      title: "Dining",
    },
    {
      image: assets.living_img,
      title: "Living",
    },
    {
      image: assets.bedroom_img,
      title: "Bedroom",
    },
  ];

  return (
    <div className="range-container">
      <h2 className="ranges-tit">Browse The Range</h2>
      <p className="range-tex">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="rooms">
        {rooms.map((room, index) => (
          <div className="room" key={index}>
            <img src={room.image} alt={`${room.title} room`} />
            <p>{room.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranges;
