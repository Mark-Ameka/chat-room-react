import React from "react";
import { useChat } from "../../contexts/ChatContext";

function UserContainer() {
  const { userList } = useChat();
  return (
    <div className="max-w-md px-6 py-6 space-y-1">
      <p className="font-semibold text-lg px-2 text-gray-700 text-start pb-2">
        Users
      </p>

      {userList &&
        userList.map((user) => {
          return (
            <div
              className="flex items-center py-2 px-2 rounded-lg cursor-pointer hover:bg-slate-100"
              key={user}
            >
              <img
                src="https://xsgames.co/randomusers/assets/avatars/male/77.jpg"
                alt="User 1"
                className="w-10 h-10 rounded-full"
              />
              <span className="ml-3 text-md capitalize text-slate-900 font-semibold">
                {user}
              </span>
            </div>
          );
        })}

      {/* <div className="flex items-center py-2 px-2 rounded-lg cursor-pointer hover:bg-gray-300">
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
      </div> */}
    </div>
  );
}

export default UserContainer;
