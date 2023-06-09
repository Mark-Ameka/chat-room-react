import React from "react";
import SearchBar from "../widgets/SearchBar";
import AddRoom from "../widgets/AddRoom";
import { useRooms } from "../../hooks/useRooms";
import { useChat } from "../../contexts/ChatContext";

function Room() {
  const { data: rooms } = useRooms();
  const { joinRoom, selectedRoom } = useChat();

  return (
    <div className="max-w-md mx-auto px-6 py-6 space-y-1">
      <p className="font-semibold text-lg text-start text-gray-700 pb-2">
        Your Rooms
      </p>
      <div className="grid grid-cols-6">
        <div className="col-span-5">
          <SearchBar />
        </div>
        <div className="col-span-1">
          <AddRoom />
        </div>
      </div>
      {rooms &&
        rooms.map((room) => {
          return (
            <div
              className="w-full hover:bg-gray-100 py-2 px-2 cursor-pointer rounded-lg"
              key={room}
              onClick={() => joinRoom(room, selectedRoom)}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {/* AVATAR */}
                  <img
                    src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.6435-9/41620964_239664446680057_6433745118305452032_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dZeRk0ecpQYAX_F_itD&_nc_ht=scontent.fmnl9-3.fna&oh=00_AfA9C0KXWBIJ0-msACOGfgQFmWIIXwOSZ6GxlZouUydeiA&oe=649BA8E7"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                {/* NAME AND MESSAGE */}
                <div className="pl-3 text-start">
                  <p className="">{room}</p>
                  <p className="text-gray-600 text-sm pt-0 sm:line-clamp-1">
                    <span>Stacy Cruz: </span>
                    Hello{" "}
                    <span className="text-xs text-gray-500 pl-1">10:05 AM</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Room;
