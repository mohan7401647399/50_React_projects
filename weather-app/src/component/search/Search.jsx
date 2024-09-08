import React from "react";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter City Name"
        name="search"
      />
      <button type="button" onClick={handleSearch}>
        Search Weather
      </button>
    </div>
  );
};

export default Search;
