import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { BsCart4, BsSearch } from "react-icons/bs";

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const category = searchTerm.trim().toLowerCase();

    if (category) {
      navigate(`/restaurantlist/${category}`);
      setSearchTerm('');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav">
        <div className="container-fluid header py-2">
          <img
            src="https://img.freepik.com/premium-vector/grilled-chicken_78118-141.jpg"
            alt="Restaurant Logo"
            width="90"
            height="90"
            className="rounded-circle"
          />
          <Link
            className="navbar-brand"
            to="/"
            style={{
              fontWeight: "bold",
              fontSize: "28px",
              color: "#ff4500",
              letterSpacing: "2px",
              fontFamily: "cursive",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)"
            }}
          >
            DELICIOUS FOOD
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <form className="d-flex search-bar mx-auto" role="search" onSubmit={handleSearch}>
              <BsSearch size={18} className="icon" />
              <input
                className="form-control ps-5"
                type="search"
                placeholder="Search for your favourite item..."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item pe-5">
                <Link to="/home" className="nav-link fs-5 text-dark">Home</Link>
              </li>
              <li className="nav-item pe-5">
                <Link to="/about" className="nav-link fs-5 text-dark">About</Link>
              </li>
              <li className="nav-item pe-5">
                <Link to="/cart" className="nav-link fs-5 text-dark">
                  <BsCart4 size={28} className="pe-1" /> Cart
                </Link>
              </li>
              <li className="nav-item pe-5">
                <Link to="/" className="nav-link fs-5 text-dark"></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
