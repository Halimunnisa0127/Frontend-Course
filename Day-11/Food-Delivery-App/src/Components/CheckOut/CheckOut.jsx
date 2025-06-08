import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CheckOut() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get cart data from navigation state or default empty values
  const { cartItems = [], totalAmount = 0 } = location.state || {};

  const [orderPlaced, setOrderPlaced] = useState(false);

  // Redirect to cart if no cart data present (e.g. direct URL access)
  useEffect(() => {
    if (!location.state || cartItems.length === 0) {
      navigate("/cart");
    }
  }, [location.state, cartItems, navigate]);

  // Handle order placement
  const handlePlaceOrder = () => {
    // In real app, call API here to process order
    setOrderPlaced(true);

    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>

      {orderPlaced ? (
        <div className="alert alert-success mt-4">
          🎉 Your order has been placed successfully!
        </div>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="mb-3">
              <p>
                <strong>{item.name}</strong> - ₹{item.price}
              </p>
            </div>
          ))}

          <h4>Total Payable: ₹{totalAmount}</h4>
          <button className="btn btn-primary mt-3" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default CheckOut;
