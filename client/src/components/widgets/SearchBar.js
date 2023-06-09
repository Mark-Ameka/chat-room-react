import React from "react";

function SearchBar() {
  return (
    <div className="relative pr-3">
      <svg
        className="absolute w-5 h-5 top-3 left-3 text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#64748b"
        strokeWidth="1.5"
        strokeLinecap="butt"
        strokeLinejoin="bevel"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="search"
        placeholder="Search"
        className="w-full text-sm pl-10 py-3 pr-2 mb-2 rounded-full focus:outline-none bg-slate-100"
      />
    </div>
  );
}

export default SearchBar;
