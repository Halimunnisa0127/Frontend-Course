import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CheckOut() {
  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems = [], totalAmount = 0 } = location.state || {};
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    if (!location.state || cartItems.length === 0) {
      navigate("/cart");
    }
  }, [location.state, cartItems, navigate]);

  const handlePlaceOrder = (e) => {
    e.preventDefault(); // prevent form reload
    setOrderPlaced(true);
    localStorage.removeItem("cartItems");
    window.dispatchEvent(new Event("cartCleared"));

    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };

  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="https://static.vecteezy.com/system/resources/previews/002/001/840/non_2x/food-delivery-service-design-vector.jpg"
            alt=""
            width="300"
            height="200"
          />
          <h2>Checkout</h2>
          <p className="lead">Please review your cart and enter billing information to place your order.</p>
        </div>

        {orderPlaced ? (
          <div className="alert alert-success text-center mt-4">
            ✅ Your order has been placed successfully! Redirecting to Home...
          </div>
        ) : (
          <div className="row g-5">
            {/* Cart summary */}
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">{cartItems.length}</span>
              </h4>
              <ul className="list-group mb-3">
                {cartItems.map((item, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">{item.name}</h6>
                      <small className="text-muted">Qty: {item.quantity || 1}</small>
                    </div>
                    <span className="text-muted">₹{item.price * (item.quantity || 1)}</span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (INR)</span>
                  <strong>₹{totalAmount}</strong>
                </li>
              </ul>
            </div>

            {/* Billing form */}
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" onSubmit={handlePlaceOrder} noValidate>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">First name</label>
                    <input type="text" className="form-control" id="firstName" required />
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="lastName" required />
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                  </div>

                  <div className="col-12">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                  </div>

                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select className="form-select" id="country" required>
                      <option value="">Choose...</option>
                      <option>India</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label">State</label>
                    <select className="form-select" id="state" required>
                      <option value="">Choose...</option>
                      <option>Andhra Pradesh</option>
                    </select>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="zip" required />
                  </div>
                </div>

                <hr className="my-4" />

                <h4 className="mb-3">Payment</h4>
                <div className="my-3">
                  <div className="form-check">
                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
                    <label className="form-check-label" htmlFor="credit">Credit card</label>
                  </div>
                  <div className="form-check">
                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                    <label className="form-check-label" htmlFor="debit">Debit card</label>
                  </div>
                  <div className="form-check">
                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                  </div>
                </div>

                <div className="row gy-3">
                  <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label">Name on card</label>
                    <input type="text" className="form-control" id="cc-name" required />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="cc-number" className="form-label">Credit card number</label>
                    <input type="text" className="form-control" id="cc-number" required />
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                    <input type="text" className="form-control" id="cc-expiration" required />
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                    <input type="text" className="form-control" id="cc-cvv" required />
                  </div>
                </div>

                <hr className="my-4" />

                <button className="w-100 btn btn-primary btn-lg" type="submit">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2025 Delicious Food</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Privacy</a></li>
          <li className="list-inline-item"><a href="#">Terms</a></li>
          <li className="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default CheckOut;
