import React from "react";

function SearchBar() {
  return (
    <div className="relative">
      <svg
        className="absolute w-5 h-5 top-2 left-3 text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="butt"
        stroke-linejoin="bevel"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="text"
        placeholder="Search"
        className="w-full text-sm pl-10 py-2 mb-4 rounded-full focus:outline-none bg-gray-200 focus:ring-2 focus:ring-gray-400"
      />
    </div>
  );
}

export default SearchBar;
