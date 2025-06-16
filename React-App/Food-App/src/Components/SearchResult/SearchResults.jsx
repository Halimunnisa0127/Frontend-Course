import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get('query');
  return (
    <div className="container mt-5">
      <h2>Search Results for "{searchTerm}"</h2>
    </div>
  );
}

export default SearchResults;
