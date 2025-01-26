import React, { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';
import Pagination from './components/Pagination';
import { fetchQuestions } from './services/api';
import FilterComponent from './components/FilterComponent';
import "./App.css";
import questSearchLogo from './assets/questSearchlogo.png';


const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [selectedType, setSelectedType] = useState('');
  const [types] = useState(['ANAGRAM', 'MCQ', 'SENTENCE']);

  useEffect(() => {
    handleSearch(query, page, selectedType);
  }, [page, selectedType]);

  const handleSearch = async (searchQuery = '', pageNum = 1, type = '') => {
    const data = await fetchQuestions(searchQuery, pageNum, type);
    setResults(data.results);
    setTotalResults(data.total);
  };

  const handleFilterChange = async (type) => {
    setSelectedType(type);
    setPage(1); // Reset page when filter changes
    handleSearch(query, 1, type);
  };

  return (
    <div className="app-container">
       <img src={questSearchLogo} alt="QuestSearch Logo" className="app-logo" />
      <h1>QuestSearch</h1>
      <SearchBox query={query} setQuery={setQuery} handleSearch={() => handleSearch(query, 1, selectedType)} />
      <FilterComponent selectedType={selectedType} setSelectedType={handleFilterChange} types={types} />
      <SearchResults results={results} />
      {totalResults > 10 && (
        <Pagination
          totalPages={Math.ceil(totalResults / 10)}
          page={page}
          setPage={(newPage) => {
            setPage(newPage);
            handleSearch(query, newPage, selectedType);
          }}
        />
      )}
    </div>
  );
};

export default App;
