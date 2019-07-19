import React from "react";

function SearchBar(props) {
  let filterText = props.filterText;
  let inStockOnly = props.inStockOnly;
  let handleChange = props.handleChange;
  return (
    <div className="mb-4 mt-3">
      <input
        name="filterText"
        type="text"
        placeholder="filter products..."
        value={filterText}
        onChange={handleChange}
      />
      <input
        name="inStockOnly"
        className="ml-4"
        type="checkbox"
        checked={inStockOnly}
        onChange={handleChange}
      />
      <span className="ml-2">Only show in stock</span>

      <select className="ml-2" name="page" value={props.page} onChange={handleChange}>
        {props.numberOfPages.map(page => (
          <option value={page}>{page}</option>
        ))}
      </select>
      <span className="ml-2">Page</span>
    </div>
  );
}

export default SearchBar;
