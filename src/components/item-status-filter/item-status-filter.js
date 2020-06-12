import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({setFilters, filters})=> {

  return (
    <div className="btn-group">
      <button type="button"
              className={`btn btn-outline-secondary ${!filters ? 'active' : ''}`}
              onClick={()=> setFilters(null)}>All</button>
      <button type="button"
              className={`btn btn-outline-secondary ${filters && filters==='important' ? 'active' : ''}`}
              onClick={()=> setFilters('important')}>Important</button>
      <button type="button"
              className={`btn btn-outline-secondary ${filters && filters==='done' ? 'active' : ''}`}
              onClick={()=> setFilters('done')}>Done</button>
    </div>
  );
}

export default ItemStatusFilter;

