import React from "react";
import { useChat } from "../../contexts/ChatContext";

function MessageHeader() {
  const { selectedRoom } = useChat();

  return (
    <div className="flex-grow">
      <div className="text-gray-700 border-b-2 px-4 py-4">
        <div className="flex items-center">
          <div className="flex flex-shrink-0">
            <img
              src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.6435-9/41620964_239664446680057_6433745118305452032_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dZeRk0ecpQYAX_F_itD&_nc_ht=scontent.fmnl9-3.fna&oh=00_AfA9C0KXWBIJ0-msACOGfgQFmWIIXwOSZ6GxlZouUydeiA&oe=649BA8E7"
              alt="User 3"
              className="w-12 h-12 rounded-full object-cover "
            />
          </div>
          <div className="flex">
            <span className="ml-3 text-xl font-semibold">{selectedRoom}</span>
          </div>
          <div className="w-96 flex-auto justify-end text-end">
            <button
              className="rounded-full px-3 py-3
                relative 
                before:content-[attr(data-tip)] 
                before:absolute 
                before:px-2 before:py-2
                before:top-10 before:-left-3
                before:-translate-x-1/2 before:-translate-y-full
                before:bg-gray-700 before:text-white
                before:rounded-md before:opacity-0
                before:transition-all
                before:text-end before:text-xs

                hover:before:opacity-100 hover:after:opacity-100"
              data-tip="Exit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-door-exit h-6 w-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M13 12v.01"></path>
                <path d="M3 21h18"></path>
                <path d="M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5"></path>
                <path d="M14 7h7m-3 -3l3 3l-3 3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageHeader;
