import React, { createContext, useContext, useState } from 'react';
import { io } from 'socket.io-client';

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [userList, setUserList] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('');

  const initializeSocket = () => {
    const newSocket = io(process.env.REACT_APP_BASE, {
      query: { token: sessionStorage.getItem('token') },
    });

    newSocket.on('user-list', (data) => {
      setUserList(data.users);
    });

    newSocket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    setSocket(newSocket);
  };

  const joinRoom = (newRoom, previousRoom) => {
    if (socket) {
      socket.emit('join-room', newRoom, previousRoom);
      setSelectedRoom(newRoom);
    }
  };

  const leaveRoom = () => {
    if (socket) {
      socket.emit('leave-room');
      setSelectedRoom('');
    }
  };

  const sendMessage = (message) => {
    if (socket) {
      socket.emit('message', { room: selectedRoom, message });
    }
  };

  const contextValue = {
    socket,
    userList,
    messages,
    selectedRoom,
    joinRoom,
    leaveRoom,
    sendMessage,
    initializeSocket
  };

  return <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>;
}

export function useChat() {
  return useContext(ChatContext);
}
