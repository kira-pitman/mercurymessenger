
import { Server } from 'socket.io'
import { Server as HttpServer } from 'http'

export function ioServer (server: HttpServer) {
  const io = new Server(server)
}