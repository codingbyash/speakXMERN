import React, { useState, useEffect } from 'react';
import FilterComponent from './FilterComponent';
import { fetchQuestions } from '../services/api';

const ParentComponent = () => {
  const [selectedType, setSelectedType] = useState('');
  const [questions, setQuestions] = useState([]);
  const [types, setTypes] = useState(['Type 1', 'Type 2', 'Type 3']);  // Example types

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuestions('', 1, selectedType);  // Pass selectedType to the API call
      setQuestions(data.results);
    };

    fetchData();
  }, [selectedType]);  // Dependency on selectedType

  return (
    <div>
      <FilterComponent 
        selectedType={selectedType} 
        setSelectedType={setSelectedType} 
        types={types} 
      />
      <div>
        {/* Render the questions here */}
        {questions.map((question, index) => (
          <div key={index}>{question.title}</div>
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;
