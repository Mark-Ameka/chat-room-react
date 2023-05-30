import React from "react";
import SearchBarContainer from "./SearchBarContainer";

function Room() {
  return (
    <div className="max-w-md mx-auto px-3 py-3 space-y-1">
      <p className="font-semibold text-lg text-start pb-2">Your Rooms</p>
      <SearchBarContainer />
      {/* Container */}
      <div className="w-full bg-gray-200 hover:bg-gray-300 py-2 px-2 cursor-pointer rounded-md">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {/* AVATAR */}
            <img
              src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.6435-9/41620964_239664446680057_6433745118305452032_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dZeRk0ecpQYAX_F_itD&_nc_ht=scontent.fmnl9-3.fna&oh=00_AfA9C0KXWBIJ0-msACOGfgQFmWIIXwOSZ6GxlZouUydeiA&oe=649BA8E7"
              alt="User Avatar"
              className="w-11 h-11 rounded-full"
            />
          </div>
          {/* NAME AND MESSAGE */}
          <div className="pl-3 text-start">
            <p className="">Room 1</p>
            <p className="text-gray-600 text-sm pt-0 sm:line-clamp-1">
              <span>John Doe: </span>
              Imung mama{" "}
              <span className="text-xs text-gray-500 pl-1">10:05 AM</span>
            </p>
          </div>
        </div>
      </div>

      {/* NOT ACTIVE */}
      <div className="w-full hover:bg-gray-300 py-2 px-2 cursor-pointer rounded-md">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {/* AVATAR */}
            <img
              src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.6435-9/41620964_239664446680057_6433745118305452032_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dZeRk0ecpQYAX_F_itD&_nc_ht=scontent.fmnl9-3.fna&oh=00_AfA9C0KXWBIJ0-msACOGfgQFmWIIXwOSZ6GxlZouUydeiA&oe=649BA8E7"
              alt="User Avatar"
              className="w-11 h-11 rounded-full"
            />
          </div>
          {/* NAME AND MESSAGE */}
          <div className="pl-3 text-start">
            <p className="">Room 2</p>
            <p className="text-gray-600 text-sm pt-0 sm:line-clamp-1">
              <span>Stacy Cruz: </span>
              Hello <span className="text-xs text-gray-500 pl-1">10:05 AM</span>
            </p>
          </div>
        </div>
      </div>

      {/* NEW */}
      <div className="w-full hover:bg-gray-300 py-2 px-2 cursor-pointer rounded-md">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {/* AVATAR */}
            <img
              src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.6435-9/41620964_239664446680057_6433745118305452032_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dZeRk0ecpQYAX_F_itD&_nc_ht=scontent.fmnl9-3.fna&oh=00_AfA9C0KXWBIJ0-msACOGfgQFmWIIXwOSZ6GxlZouUydeiA&oe=649BA8E7"
              alt="User Avatar"
              className="w-11 h-11 rounded-full"
            />
          </div>
          {/* NAME AND MESSAGE */}
          <div className="pl-3 text-start">
            <p className="font-semibold text-gray-950">Room 2</p>
            <p className="text-gray-950 text-sm pt-0 font-semibold sm:line-clamp-1">
              <span>Stacy Cruz: </span>
              Hello <span className="text-xs  pl-1">10:05 AM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
