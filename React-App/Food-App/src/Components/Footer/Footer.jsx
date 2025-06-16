import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <div className="container-fluid bg-dark text-white footer">
      <footer className="py-5">
        <div className="row">
          {/* Logo Section */}
          <div className="col-12 col-md-3 mb-3 ps-4 ">
            <img
              src="https://img.freepik.com/premium-vector/grilled-chicken_78118-141.jpg"
              alt="Logo"
              width="200"
              height="150"
              className="text-white restaurant-logo"
             
            />
            <p className="mt-3">Enjoy delicious food</p>
          </div>

          {/* Movie Booking Links */}
          <div className="col-6 col-md-2 mb-3">
            <h5>Delicious Food</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Terms & Conditions</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Features</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Privacy Policy</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Contact Us</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Help & Support</a>
              </li>
            </ul>
          </div>

          {/* Delicious Food Links */}
          <div className="col-6 col-md-2 mb-3  mt-3 pt-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Snacks & Beverages</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Combo Offers</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Meal Plans</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Order at Seat</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">All Day Menu</a>
              </li>
            </ul>
          </div>

          {/* Subscription Form */}
          <div className="col-md-5 mb-3">
            <form>
              <h5>Subscribe to Our Newsletter</h5>
              <p>Get updates on food offers & special deals.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mt-4 border-top pt-3 px-3">
          <p className="mb-0">&copy; 2025 Delicious Food Inc. All rights reserved.</p>
          <div className="social-icons d-flex gap-3">
            <a href="#"><FaFacebook className="text-white fs-4" /></a>
            <a href="#"><FaInstagram className="text-white fs-4" /></a>
            <a href="#"><FaTwitter className="text-white fs-4" /></a>
            <a href="#"><FaYoutube className="text-white fs-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
