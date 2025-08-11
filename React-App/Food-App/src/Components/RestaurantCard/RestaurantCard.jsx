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
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    if (quantity > 0) {
      onAddToCart({ id, name, image, price, cuisine, rating, quantity });
      setQuantity(0); // Reset after adding
    }
  };

  return (
    <div
      className="shadow-sm rescard"
      onClick={onClick}
      style={{ cursor: "pointer", borderRadius: "12px" }}
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

          <div className="d-flex align-items-center gap-2 mb-2">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={(e) => {
                e.stopPropagation();
                setQuantity((q) => Math.max(0, q - 1));
              }}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="btn btn-outline-success btn-sm"
              onClick={(e) => {
                e.stopPropagation();
                setQuantity((q) => q + 1);
              }}
            >
              +
            </button>
          </div>

          <button
            className="btn btn-success btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              handleAdd();
            }}
            disabled={quantity === 0}
          >
            {quantity > 0 ? `Add ${quantity} to Cart` : "Add to Cart"}
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
