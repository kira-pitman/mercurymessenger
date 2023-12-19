import useSocket from "./useSocket"

export default function Home () {
  const [messages, sendMessage] = useSocket()


  return (<p>hello</p>)
}