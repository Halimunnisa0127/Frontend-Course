import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FaShippingFast, FaUtensils, FaHeadset } from 'react-icons/fa';

function About() {
  return (
    <div className="about-container container py-5">
      <motion.div
        className="hero-section mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="overlay-text-box">
          <h1 className="display-4 text-white fw-bold">Delicious Food</h1>
          <p className="text-light fs-5">Savor the flavor, straight to your door.</p>
        </div>
      </motion.div>

      <motion.div
        className="row align-items-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/premium-vector/food-delivery-service-fast-food-delivery-scooter-delivery-service_67394-1141.jpg"
            alt="Delicious Food"
            className="img-fluid rounded shadow-lg"
          />
        </div>
        <div className="col-md-6  mt-md-0">
          <p className="text-muted fs-5">
            Welcome to <strong>Delicious Food</strong>, your go-to destination for ordering the most delicious and freshly prepared meals online.
            We bring the finest cuisines from your favorite restaurants straight to your door, fast and hot!
          </p>
          <p className="text-muted fs-5">
            Our platform is user-friendly, allowing you to browse a wide variety of food categories—from sizzling biryanis to sweet desserts, healthy meals to quick snacks.
            Whether you're craving traditional Indian dishes or international treats, we’ve got something for everyone.
          </p>
          <h2 className="fw-bold mb-3">Why Choose Delicious Food?</h2>
          <ul className="list-unstyled fs-5 text-muted">
            <li><FaShippingFast className="text-primary me-2" /> Fast and Hot Delivery</li>
            <li><FaUtensils className="text-success me-2" /> Variety of Authentic Cuisines</li>
            <li><FaHeadset className="text-danger me-2" /> 24/7 Friendly Support</li>
          </ul>
          <p className="mt-3">
            We bring joy to your table with every bite.Whether it's a spicy Indian biryani or a cheesy Italian pizza, your cravings are just a click away.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
