import React from "react";

const SearchBar = ({ search, handleChange }) => {
  return (
    <div className="searchBar">
      <label htmlFor="search">Search: </label>
      <input
        className="searchBar-input"
        type="search"
        name="search"
        placeholder="Search for your favorite character"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
