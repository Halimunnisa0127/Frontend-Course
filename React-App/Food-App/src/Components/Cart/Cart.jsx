import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, onRemoveFromCart }) {
  const navigate = useNavigate();

  // Calculate total amount
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  //  Handle checkout navigation
  const handleCheckout = () => {
    navigate("/checkout", {
      state: {
        cartItems,
        totalAmount,
      },
    });
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="card mb-3 p-3 d-flex flex-row align-items-center"
            >
              <img src={item.image} alt={item.name} width="100" />
              <div className="ms-3 flex-grow-1">
                <h5>{item.name}</h5>
                <p>₹{item.price}</p>
                <p>{item.cuisine}</p>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => onRemoveFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-end mt-4">
            <h4>Total: ₹{totalAmount}</h4>
            <button className="btn btn-success mt-2" onClick={handleCheckout}>
              Go to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
