const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const http = require('http')
const app = express()
const server = http.createServer(app)
const { Server } = require('socket.io')
const { deserializeUser } = require('./middlewares/auth')
const io = new Server(server)
const ROOMS = ['germany', 'italy', 'japan']

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('connected to db'))
    .catch(err => console.log(err.message))

app.use(
    cors({
        origin: process.env.ORIGIN,
        credentials: true,
    })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use(deserializeUser)

// testing routes
app.get('/', (req, res) => {
    console.log('req.user', req.user)
    res.sendFile(__dirname + '/views/index.html')
});
app.get('/rooms', (req, res) => res.json(ROOMS))
app.get('/rooms/:room', (req, res) => res.sendFile(__dirname + '/views/room.html'))

app.use('/api', router)

const connectedUsers = new Set()

io.on('connection', socket => {
    connectedUsers.add(socket.id)
    io.emit('user-list', Array.from(connectedUsers))
    
    socket.on('join-room', room => {
        socket.join(room)
        console.log(`user joined the room ${room}`)
    })

    socket.on('room-messages', msg => {
        const room = Array.from(socket.rooms)[1]
        io.to(room).emit('room-messages', msg)
    })

    socket.on('disconnect', () => {
        connectedUsers.delete(socket.id)
        io.emit('user-list', Array.from(connectedUsers))
    })
})

app.use(errorHandler)

const port = process.env.PORT || 5000
server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})

