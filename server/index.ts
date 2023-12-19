import server from './server.ts'
import { ioServer } from './socketIo.ts'

const PORT = process.env.PORT || 3000
const serverObj = server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('API server listening on port', PORT)
})

ioServer(serverObj)
