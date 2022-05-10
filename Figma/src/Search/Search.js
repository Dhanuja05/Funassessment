import React from "react";
import "./Search.css";
function Search() {
  return (
    <div>
      <div className="d-flex mt-5 px-0">
        <input type="search" className="search" placeholder="Search query..." />
        <button className="button ">Search</button>
      </div>
    </div>
  );
}

export default Search;
