import { server } from '../src/utils/mockServer/server'

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.restoreHandlers()
})
