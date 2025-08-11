import React, { useState } from "react";

function RestaurantSearchCard({ name, price, image, cuisine, rating, onAddToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart({ name, price, image, cuisine, rating, quantity });
      setQuantity(0); // Reset after adding
    }
  };

  return (
    <div className="card shadow-sm p-3">
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>{cuisine}</p>
        <p>₹{price}</p>
        <p>⭐ {rating}</p>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <button className="btn btn-outline-danger" onClick={() => setQuantity(q => Math.max(0, q - 1))}>-</button>
          <span>{quantity}</span>
          <button className="btn btn-outline-success" onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>
        <button className="btn btn-sm btn-success w-100" onClick={handleAddToCart} disabled={quantity === 0}>
          {quantity > 0 ? `Add ${quantity} to Cart` : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default RestaurantSearchCard;
