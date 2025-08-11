import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
