import React from "react";
import RoomContainer from "./containers/RoomContainer";
import UserContainer from "./containers/UserContainer";
import ProfileContainer from "./containers/ProfileContainer";

function Home() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 h-screen bg-white ">
      <div className="md:block hidden col-span-1 border-r-2">
        <RoomContainer />
      </div>
      <div className="col-span-2 border-r-2">chat container</div>
      <div className="md:grid hidden grid-rows-4 h-screen">
        <div className="col-span-1 border-b-2">
          <ProfileContainer />
        </div>
        <div className="col-span-1 row-span-3">
          <UserContainer />
        </div>
      </div>
    </div>
  );
}

export default Home;
