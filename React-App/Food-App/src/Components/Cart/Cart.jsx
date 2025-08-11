import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const handleQuantityChange = (item, delta) => {
    setCartItems(prevItems =>
      prevItems
        .map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + delta }
            : cartItem
        )
        .filter(cartItem => cartItem.quantity > 0)
    );
  };

  const handleRemoveItem = (item) => {
    setCartItems(prevItems =>
      prevItems.filter(cartItem => cartItem.name !== item.name)
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handleCheckout = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    navigate("/checkout", {
      state: { cartItems, totalAmount: total }
    });
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <h1>No items in cart.</h1>
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg"
            alt="Empty cart"
            className="img-fluid"
            style={{ maxWidth: "600px" }}
          />
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.name}
              className="card mb-3 p-3 d-flex flex-row align-items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                width="100"
                height="100"
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
              <div className="ms-3 flex-grow-1">
                <h5>{item.name}</h5>
                <p>₹{item.price} each</p>
                <div className="d-flex align-items-center mb-2">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => handleQuantityChange(item, -1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handleQuantityChange(item, 1)}
                  >
                    +
                  </button>
                </div>
                <p>Subtotal: ₹{item.price * item.quantity}</p>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveItem(item)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* ✅ Single Summary Section */}
          <div className="container my-5">
            <h2 className="mb-4">🛒 Cart Summary</h2>
            <ul className="list-group mb-4">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{item.name} x {item.quantity}</span>
                  <span>₹{item.price} each</span>
                </li>
              ))}
            </ul>
            <div className="text-end">
              <h5>Subtotal: ₹{subtotal.toFixed(2)}</h5>
              <h5>Tax (5%): ₹{tax.toFixed(2)}</h5>
              <h4>Total: ₹{total.toFixed(2)}</h4>
              <button className="btn btn-success mt-2" onClick={handleCheckout}>
                Go to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
