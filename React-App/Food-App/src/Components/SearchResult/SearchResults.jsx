import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RestaurantSearchCard from "../RestaurantSearchCard/RestaurantSearchCard";
import restaurantData from "../RestaurantData/RestaurantData";

function SearchResults({ onAddToCart }) {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("q")?.toLowerCase() || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filtered = restaurantData.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setResults(filtered);
  }, [searchTerm]);

  return (
    <div className="container mt-5">
      <h3>Search results for: "{searchTerm}"</h3>
      <div className="row">
        {results.length ? (
          results.map(item => (
            <div key={item.id} className="col-6 col-md-4 my-3">
              <RestaurantSearchCard
                name={item.name}
                image={item.image}
                cuisine={item.cuisine}
                price={item.price}
                rating={item.rating}
                onAddToCart={onAddToCart} // ✅ Corrected
              />
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
