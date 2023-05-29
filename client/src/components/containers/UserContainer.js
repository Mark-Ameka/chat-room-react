import React from "react";

function UserContainer() {
  return (
    <div className="max-w-md px-2 py-3 space-y-1">
      <p className="font-semibold text-lg px-2 text-start pb-2">Users</p>
      <div className="flex items-center py-2 px-2 rounded-lg cursor-pointer hover:bg-gray-300">
        <img
          src="https://xsgames.co/randomusers/assets/avatars/male/77.jpg"
          alt="User 1"
          className="w-8 h-8 rounded-full"
        />
        <span className="ml-3 text-md font-semibold">Rolf Middleton</span>
      </div>
      <div className="flex items-center py-2 px-2 rounded-lg cursor-pointer hover:bg-gray-300">
        <img
          src="https://xsgames.co/randomusers/assets/avatars/male/38.jpg"
          alt="User 2"
          className="w-8 h-8 rounded-full"
        />
        <span className="ml-3 text-md font-semibold">Trevor Bridges</span>
      </div>
      <div className="flex items-center py-2 px-2 rounded-lg cursor-pointer hover:bg-gray-300">
        <img
          src="https://xsgames.co/randomusers/assets/avatars/female/9.jpg"
          alt="User 3"
          className="w-8 h-8 rounded-full"
        />
        <span className="ml-3 text-md font-semibold">Sheree Swanson</span>
      </div>
    </div>
  );
}

export default UserContainer;
