const { Server } = require('socket.io');
const jwt = require('jsonwebtoken')

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

  // store userId instead of name
  const roomUsersMap = new Map()

  io.on('connection', (socket) => {
    console.log('new connection')
    socket.on('join-room', (newRoom, previousRoom) => {
      console.log('join-room signal ', newRoom, previousRoom)
      socket.join(newRoom)
      socket.leave(previousRoom)
        
      if (previousRoom && roomUsersMap.has(previousRoom)) {
        console.log(`leaving ${previousRoom} room`)
        roomUsersMap.get(previousRoom).delete(socket.user.name)
      }
      
      if (!roomUsersMap.has(newRoom)) {
        console.log(`creating ${newRoom} room`)
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
      // console.log(`Room: ${newRoom}, Users: [${usersInRoom}]`)


    });

    // socket.on('room-messages', (msg) => {
    //   const room = Array.from(socket.rooms)[1];
    //   io.to(room).emit('room-messages', msg);
    // });

    socket.on('disconnect', () => {
      console.log('disconnect ')
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
