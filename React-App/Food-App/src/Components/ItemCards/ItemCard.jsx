import React, { useState } from "react";

function ItemCard({ name, price, image, cuisine, rating, onClick, onAddToCart }) {
  const [clicked, setClicked] = useState(false); // button click track

  return (
    <div
      className="shadow-sm itemcard mb-3"
      onClick={onClick}
      style={{
        cursor: 'pointer',
        borderRadius: '12px',
        
      }}
    >
      <img
        src={image}
        alt={name}
        className="item-image img-fluid w-100"
        style={{
          height: '200px',
          borderRadius: '12px 12px 0 0'
        }}
      />
      <div className='body d-flex justify-content-between my-4 mx-3'>
        <div className="info">
          <h5 className="title mb-1">{name}</h5>
          <h6 className="text mb-1">{cuisine}</h6>
          <button
            className={`btn ${clicked ? "btn-success" : "btn-warning"}`}
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
              setClicked(true); // change color
            }}
           
          >
            {clicked ? "Added" : "Add to Cart"}
          </button>

        </div>
        <div className="details">
          <p className='price mb-1 text-success fw-bold'>&#8377;{price}</p>
          <h6 className="mb-0">{rating}&#9733;</h6>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
