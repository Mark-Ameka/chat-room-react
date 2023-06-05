import React, { useEffect } from "react";
import RoomContainer from "./containers/RoomContainer";
import UserContainer from "./containers/UserContainer";
import ProfileContainer from "./containers/ProfileContainer";
import MessageContainer from "./containers/MessageContainer";
import { useUser } from '../hooks/useUser'
import { useChat } from "../contexts/ChatContext";


function Home() {
  const { data: user } = useUser() 
  console.log(user)
  const { socket, initializeSocket, selectedRoom } = useChat()

  useEffect(() => {
    if (user) {
      initializeSocket()
    }
    return () => {
      if (socket) {
        socket.disconnect()
      }
    }
  }, [])

  return (
    <div className="grid md:grid-cols-4 grid-cols-1 h-screen bg-white font-outfit">
      <div className="md:block hidden col-span-1">
        <RoomContainer />
      </div>
      <div className="col-span-2">
        {
          selectedRoom && <MessageContainer />
        }
      </div>
      <div className="md:grid hidden grid-rows-4 h-screen">
        <div className="col-span-1">
          <ProfileContainer />
        </div>
        <div className="col-span-1 row-span-3">
          {
            selectedRoom && <UserContainer />
          }
          
        </div>
      </div>
    </div>
  );
}

export default Home;
