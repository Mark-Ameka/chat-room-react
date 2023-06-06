import React from "react";

function AddRoom() {
  return (
    <div>
      <button className="flex items-center justify-center rounded-full bg-slate-100 px-2 py-2 hover:bg-slate-200">
        <svg
          class="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9CA3AF"
          stroke-width="1.5"
          stroke-linecap="butt"
          stroke-linejoin="bevel"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
}

export default AddRoom;
