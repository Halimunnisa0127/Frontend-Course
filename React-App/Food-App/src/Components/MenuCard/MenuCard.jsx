import React from "react";
import './MenuCard.css';
function MenuCard({ image, onClick }) {
  return (
    <div
      className=" shadow-sm border-0"
      onClick={onClick}
    >
      <img
        src={image}
        alt="menu"
        className="menu" // Bootstrap classes for full width image
      />
    </div>
  );

 
}


export default MenuCard;
