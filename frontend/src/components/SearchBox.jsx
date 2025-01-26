import React, { useState } from 'react';
import "../styles/searchResults.css";

const SearchBox = ({ query, setQuery, handleSearch }) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

const handleSubmit = (e) => {
  e.preventDefault();
  if (!query.trim()) return; 
  handleSearch(query);
};


  return (
    <div className="search-box">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for questions..."
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default SearchBox;
