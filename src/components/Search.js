import React from "react";

function Search({ handleFilter, search }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={handleFilter}
      />
    </div>
  );
}

export default Search;
