const { Server } = require('socket.io');
const jwt = require('jsonwebtoken')
const User = require('./models/user.model')

const setupSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.ORIGIN,
      methods: ['GET', 'POST'],
    },
  });


  io.use((socket, next) => {
    const token = socket.handshake.query.token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log('Socket Authentication Error')
            return next(new Error('Socket Authentication Error'))
        }
        socket.user = decoded
    })
    next()
  })

  // TODO store userId instead of name
  // TODO store data in db

  const roomUsersMap = new Map()

  io.on('connection', (socket) => {

    socket.on('join-room', (newRoom, previousRoom) => {
      socket.join(newRoom)
      socket.leave(previousRoom)
        
      if (previousRoom && roomUsersMap.has(previousRoom)) {
        roomUsersMap.get(previousRoom).delete(socket.user.name)
      }
      
      if (!roomUsersMap.has(newRoom)) {
        roomUsersMap.set(newRoom, new Set())
      }
      roomUsersMap.get(newRoom).add(socket.user.name)
      
      const usersInRoom = Array.from(roomUsersMap.get(newRoom))

      io.to(newRoom).emit('user-list', {
        users: usersInRoom
      })
      // display all rooms and users
      for (const [key, value] of roomUsersMap) {
        let str = `${key}: [`
        for (const elem of value) {
          str += elem + ' '
        }
        str += ']'
        console.log(str)
      }
    });

    // sender?
    socket.on('send-message', async (message, date, senderId) => {
      const room = Array.from(socket.rooms)[1];
      // console.log({message, date, senderId, room})
      const sender = await User.findById(senderId)
      io.to(room).emit('messages', { message, date, sender, room });
    });

    socket.on('disconnect', () => {
      const rooms = Array.from(socket.rooms).slice(1)  
      for (const room of rooms) {
        if (roomUsersMap.has(room)) {
          roomUsersMap.get(room).delete(socket.user.name)
          const usersInRoom = Array.from(roomUsersMap.get(room))
          io.to(room).emit('user-list', {
            users: usersInRoom
          })
        }
      }
    });

  });
};

module.exports = setupSocket;
