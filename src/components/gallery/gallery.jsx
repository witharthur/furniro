import React from "react";
import "./gallery.css";
import { assets } from "../../assets/assets.js";

const gallery = () => {
  return (
    <div>
      <p className="share">Share your setup with</p>
      <h2 className="hashtag">#FurniroForniture</h2>
      <div className="gallerys">
        <img src={assets.gallery_4} alt="" />
        <img src={assets.gallery_2} alt="" />

         <img src={assets.gallery_7} alt="" />
        <img src={assets.gallery_1} alt="" />
        <img src={assets.gallery_5} alt="" />
       <img src={assets.gallery_6} alt="" />
     <img src={assets.gallery_8} alt="" />
        <img src={assets.gallery_9} alt="" />
       <img src={assets.gallery_10} alt="" />

      </div>
    </div>
  );
};

export default gallery;
