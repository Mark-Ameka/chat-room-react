import React, { useEffect, useRef, useState } from "react";
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
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="bg-white px-0 border-b-2 border-gray-100">
          <div className="flex items-center px-6 py-4 rounded-lg">
            <img
              src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.6435-9/41620964_239664446680057_6433745118305452032_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dZeRk0ecpQYAX_F_itD&_nc_ht=scontent.fmnl9-3.fna&oh=00_AfA9C0KXWBIJ0-msACOGfgQFmWIIXwOSZ6GxlZouUydeiA&oe=649BA8E7"
              alt="User 3"
              className="w-12 h-12 rounded-full"
            />
            <span className="ml-3 text-xl font-semibold">{selectedRoom}</span>
          </div>
        </div>
      </div>
      <div className="overflow-auto max-custom">
        <div className="flex-grow flex flex-col-reverse mb-4 mt-4">
          <div className="px-6 rounded-b-lg">
            <div className="flex flex-col space-y-4">
              {messages &&
                messages
                  .filter((x) => x.room === selectedRoom)
                  .map((x) => {
                    const date = new Date(x.date);
                    const formattedDate = date.toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                    });
                    if (x.sender._id === user._id) {
                      return (
                        <div
                          className="flex items-end justify-end"
                          key={x.date}
                        >
                          <div className="flex items-end">
                            <div className="grid grid-flow-row">
                              <span className="text-end text-xs mb-1">
                                {formattedDate} {x.sender.name}
                              </span>
                              <div className="bg-red-600 text-white rounded-2xl rounded-br-sm p-2 text-end ml-11">
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
                                {formattedDate} {x.sender.name}
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
        <button className="bg-red-600 text-white rounded-r-full px-4 py-2">
          Enter
        </button>
      </form>
    </div>
  );
}

export default MessageContainer;
