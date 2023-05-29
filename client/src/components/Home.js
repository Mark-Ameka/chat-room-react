import React from "react";

function Home() {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-1 h-screen ">
      <div className="sm:block hidden col-span-1 bg-gray-200">
        room container
      </div>
      <div className="col-span-2 bg-blue-200">chat container</div>
      <div className="sm:grid hidden grid-rows-4 h-screen">
        <div className="col-span-1 bg-green-200">profile container</div>
        <div className="col-span-1 row-span-3 bg-green-200">
          users container
        </div>
      </div>
    </div>
  );
}

export default Home;
