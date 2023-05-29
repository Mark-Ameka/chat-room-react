import React from "react";
import Room from "./Room";

function Home() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 h-screen">
      <div className="md:block hidden col-span-1 bg-purple-100 border-r-2 border-gray-300">
        <Room />
      </div>
      <div className="col-span-2 bg-purple-100 border-r-2 border-gray-300">
        chat container
      </div>
      <div className="md:grid hidden grid-rows-4 h-screen">
        <div className="col-span-1 bg-purple-100 border-b-2 border-gray-300">
          profile container
        </div>
        <div className="col-span-1 row-span-3 bg-purple-100">
          users container
        </div>
      </div>
    </div>
  );
}

export default Home;
