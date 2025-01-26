// FilterComponent.jsx
import React from 'react';

const FilterComponent = ({ selectedType, setSelectedType, types }) => {
  const handleChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="filter-container">
      <label htmlFor="question-type">Filter by Type:</label>
      <select
        id="question-type"
        value={selectedType}
        onChange={handleChange}
      >
        <option value="">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
