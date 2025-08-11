import React, { useState } from "react";

function ItemCard({ name, price, image, cuisine, rating, onClick, onAddToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = (e) => {
    e.stopPropagation();
    if (quantity > 0) {
      onAddToCart({ name, price, image, cuisine, rating, quantity });
      setQuantity(0); // Reset quantity after adding to cart
    }
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    setQuantity((q) => Math.max(0, q - 1));
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    setQuantity((q) => q + 1);
  };

  return (
    <div
      className="shadow-sm itemcard mb-3"
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

          <div className="d-flex align-items-center gap-2 mb-2">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleDecrement}
              disabled={quantity === 0}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="btn btn-outline-success btn-sm"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          <button
            className="btn btn-success btn-sm"
            onClick={handleAdd}
            disabled={quantity === 0}
          >
            {quantity > 0 ? `Add ${quantity} to Cart` : "Add to Cart"}
          </button>
        </div>

        <div className="details text-end">
          <p className="price mb-1 text-success fw-bold">&#8377;{price}</p>
          <h6 className="mb-0">{rating}&#9733;</h6>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
