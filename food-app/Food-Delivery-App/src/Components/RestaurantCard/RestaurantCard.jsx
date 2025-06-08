import React, { useState } from "react";
import './RestaurantCard.css';

function RestaurantCard({
  id = 0,
  image = "https://via.placeholder.com/300x200?text=No+Image",
  name = "Unknown Dish",
  price = 0,
  cuisine = "Various",
  rating = "3.0",
  onClick = () => {},
  onAddToCart = () => {},
}) {
  const [clicked, setClicked] = useState(false); // 👉 track if button was clicked

  return (
    <div
      className="shadow-sm rescard" 
      onClick={onClick}
      style={{
        cursor: "pointer",
        borderRadius: "12px",
         
      }}
    >
      <img
        src={image}
        alt={name}
        className="item-image img-fluid w-100"
        style={{
          height: "200px",
          borderRadius: "12px 12px 0 0",
        }}
      />
      <div className="body d-flex justify-content-between my-4 mx-3">
        <div className="info">
          <h5 className="title mb-1">{name}</h5>
          <h6 className="text mb-1">{cuisine}</h6>

          <button
            className={`btn cartbutton ${clicked ? "btn-success" : "btn-warning"}`}
            onClick={(e) => {
              e.stopPropagation(); // prevent parent click
              onAddToCart();
              setClicked(true); // 👉 change color after click
            }}
          >
            {clicked ? "Added" : "Add to Cart"}
          </button>
        </div>
        <div className="details">
          <p className="price mb-1 text-success fw-bold">&#8377;{price}</p>
          <h6 className="mb-0">{rating}&#9733;</h6>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
