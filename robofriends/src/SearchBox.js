import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="p-1">
      <input
        className="p-2.5 bg-cyan-200 outline-none rounded-lg"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
