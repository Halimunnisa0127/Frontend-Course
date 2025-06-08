import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get('query');

  // Ikkada searchTerm base chesukoni API call or data filter cheyochu.
  // For demo, just show searchTerm
  return (
    <div className="container mt-5">
      <h2>Search Results for "{searchTerm}"</h2>

      {/* 
        Show filtered/search results here.
        Example: fetch results from API or filter your local data based on searchTerm
      */}
    </div>
  );
}

export default SearchResults;
