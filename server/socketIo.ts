import { Server } from 'socket.io'
import { Server as HttpServer } from 'http'

export function ioServer(server: HttpServer) {
  const io = new Server(server, {
    cors: {
      origin: ["http://127.0.0.1:5173/"],
      methods: ["GET", "POST"],
      credentials: false
    }
  })
  
  console.log('yeep')
  io.on('connection', (socket) => {
    console.log('new connection:' + socket.id)
    // socket.on('disconnect', (object) => {
    //   console.log('disconnect:')
    // })

    socket.on('chat', (message) => {
      io.sockets.emit('chat', message)
    })

    socket.on('yeep', () => {
      console.log('yeeping')
    })
  })
}
