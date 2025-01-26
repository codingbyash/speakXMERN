import React from 'react';
// import "../styles/SearchResults.css";


const SearchResults = ({ results = [] }) => {
  console.log('Search Results:', results); 
  if (!results.length) {
    return <p>No results found</p>;
  }

  return (
    <div className="search-results">
      {results.map((result) => (
        <div key={result._id} className="result-card">
          <h3>{result.title}</h3>
          <p>Type: {result.solution}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
