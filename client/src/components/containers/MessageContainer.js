import React, { useEffect, useRef, useState } from "react";
import MessageHeader from "./MessageHeader";
import { useChat } from "../../contexts/ChatContext";
import { useUser } from "../../hooks/useUser";

function MessageContainer() {
  const { selectedRoom, messages, sendMessage } = useChat();
  const [message, setMessage] = useState("");
  const { data: user } = useUser();
  const scrolly = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message === "") return;
    sendMessage(message, user._id);
    setMessage("");
  };

  const scrollToBottom = () => {
    scrolly.current.scrollIntoView();
    scrolly.current.scrollTop = scrolly.current.scrollToBottom;
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="flex flex-col h-screen py-2">
      <MessageHeader />
      <div className="overflow-auto max-custom">
        {messages.length === 0 ? (
          <div className="pb-5">
            <p className="text-lg text-gray-600">No messages</p>
          </div>
        ) : (
          <div className="flex-grow flex flex-col-reverse mb-4 mt-4">
            <div className="px-6 rounded-b-lg">
              <div className="flex flex-col space-y-4">
                {messages &&
                  messages
                    .filter((x) => x.room === selectedRoom)
                    .map((x) => {
                      const date = new Date(x.date);
                      const formattedDate_date = date.toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      });
                      const formattedDate_time = date.toLocaleString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                      });
                      if (x.sender._id === user._id) {
                        return (
                          <div
                            className="flex items-end justify-end"
                            key={x.date}
                          >
                            <div className="flex items-end">
                              <div className="grid grid-flow-row">
                                <div className="text-end text-sm mb-1 text-gray-800">
                                  <span>
                                    {formattedDate_date} • {x.sender.name}
                                  </span>
                                </div>
                                <div
                                  className="bg-red-600 text-white rounded-2xl rounded-br-sm p-2 text-end ml-auto
                                  relative 
                                  before:content-[attr(data-tip)] 
                                  before:absolute 
                                  before:px-2 before:py-2
                                  before:top-9 before:-left-9
                                  before:-translate-x-1/2 before:-translate-y-full
                                  before:bg-gray-700 before:text-white
                                  before:rounded-md before:opacity-0
                                  before:transition-all
                                  before:text-end before:text-xs
    
                                  hover:before:opacity-100 hover:after:opacity-100
                                "
                                  data-tip={formattedDate_time}
                                >
                                  <p>{x.message}</p>
                                </div>
                              </div>
                              <img
                                src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg"
                                alt="Receiver Avatar"
                                className="w-9 h-9 rounded-full ml-2"
                              />
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div className="flex items-start" key={x.date}>
                            <div className="flex items-end">
                              <img
                                src="https://xsgames.co/randomusers/assets/avatars/female/31.jpg"
                                alt="Receiver Avatar"
                                className="w-9 h-9 rounded-full mr-2"
                              />
                              <div className="grid grid-flow-row">
                                <span className="text-start text-xs mb-1">
                                  {formattedDate_date} {x.sender.name}
                                </span>
                                <div className="bg-gray-200 text-black rounded-2xl rounded-bl-sm p-2 text-start mr-11">
                                  <p>{x.message}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}

                {/* other user */}
                {/* <div className="flex items-start">
                <div className="flex items-end">
                  <img
                    src="https://xsgames.co/randomusers/assets/avatars/female/31.jpg"
                    alt="Receiver Avatar"
                    className="w-9 h-9 rounded-full mr-2"
                  />
                  <div className="grid grid-flow-row">
                    <span className="text-start text-xs mb-1">10:20AM</span>
                    <div className="bg-gray-200 text-black rounded-2xl rounded-bl-sm p-2 text-start mr-11">
                      <p>Hoy</p>
                      <p>
                        Suspendisse potenti. Aliquam cursus est eu imperdiet
                        eleifend. Aliquam semper, elit et ullamcorper fermentum,
                        nunc dui auctor nibh, et cursus nibh nisi feugiat dolor.
                        Maecenas velit libero, sollicitudin sit amet pulvinar
                        eu, feugiat non lorem. Phasellus dignissim ante ut
                        tortor pharetra elementum. Vivamus fermentum mollis eros
                        nec condimentum. Quisque venenatis dolor et magna
                        venenatis porttitor. Nullam bibendum odio ac lorem
                        elementum, ut iaculis turpis pretium. Quisque blandit
                        varius ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}

                {/* me */}
                {/* <div className="flex items-end justify-end">
                <div className="flex items-end">
                  <div className="grid grid-flow-row">
                    <span className="text-end text-xs mb-1">10:20AM</span>
                    <div className="bg-red-600 text-white rounded-2xl rounded-br-sm p-2 text-end ml-11">
                      <p>Unsa man</p>
                      <p>
                        Etiam tempus ante sed luctus viverra. Morbi sed lectus
                        sit amet mi commodo vehicula. Orci varius natoque
                        penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Curabitur nec mauris quis ex suscipit
                        commodo. Nullam mattis volutpat ex, vel molestie ante.
                        Ut sed dictum mauris.
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg"
                    alt="Receiver Avatar"
                    className="w-9 h-9 rounded-full ml-2"
                  />
                </div>
              </div> */}
              </div>
            </div>
          </div>
        )}
        <div ref={scrolly}></div>
      </div>
      <form
        className="sticky rounded-full flex mb-3 px-6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Aa"
          className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:border-gray-400"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button className="bg-red-600 text-white rounded-r-full px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-send mr-1"
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
            <path d="M10 14l11 -11"></path>
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default MessageContainer;
