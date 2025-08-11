// src/components/Header.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ cartCount = 0, searchQuery, setSearchQuery }) {
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top px-4 py-2">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src="https://img.freepik.com/premium-vector/grilled-chicken_78118-141.jpg"
            alt="Logo"
            width="40"
            height="40"
          />
          <strong>
            <span style={{ color: "#d61e1e" }}>DELICIOUS FOOD</span>
          </strong>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="d-flex mx-auto w-50" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control me-2"
              style={{ width: "300px" }}
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link" to="/cart">
                🛒
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
