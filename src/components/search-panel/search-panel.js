import React from "react";
import './search-panel.css';

const SearchPanel = ({setSearch}) => {

  const onInputChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <input type="text"
           className="form-control search-input"
           placeholder="Search todo..."
            onChange={(event)=>onInputChange(event)}
    />
  );
};

export default SearchPanel;
