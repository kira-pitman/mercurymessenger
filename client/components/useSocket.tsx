import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import {DefaultEventsMap} from "@socket.io/component-emitter"

interface User{
  name: string,
  uid: number
}

interface MessageObject{
  userObj: User,
  message: string
}

const useSocket: (connection?: string) => (MessageObject[] | ((messageObject: MessageObject) => void))[] = (connection = '') => {
  const [messages, setMessages] = useState<MessageObject[]>([])
  const socket = useRef<Socket<DefaultEventsMap> | null>(null)

  useEffect(() => {
    console.log('i made it here')
    socket.current = io('127.0.0.1:3000')

    socket.current.on('connect', () => {
      console.log('connected')
    })

    socket.current.emit('yeep')

    socket.current.on('chat', (newMessage:MessageObject) => {
      setMessages((messages) => [...messages, newMessage])
    })

    return () => {
      socket.current?.disconnect()
    }
  }, [connection])

  const sendMessage = (messageObject: MessageObject) => {
    // console.log(messageObject)
    socket?.current?.emit('chat', messageObject)
  }

  return [messages, sendMessage]
}

export default useSocket