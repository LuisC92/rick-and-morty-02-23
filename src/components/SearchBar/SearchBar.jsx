import React from "react";

const SearchBar = ({ search, handleChange }) => {
  return (
    <div>
      SearchBar
      <label htmlFor="search">Search: </label>
      <br/>
      <input
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
