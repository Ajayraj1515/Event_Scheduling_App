import React from "react";

const FilterBar = ({ setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h3>Filter by Date</h3>
      <input type="date" onChange={handleFilterChange} />
    </div>
  );
};

export default FilterBar;
