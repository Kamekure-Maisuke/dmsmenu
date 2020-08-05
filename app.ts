import { 
  Application,
  config
 } from "./deps.ts";
import router from './router.ts'

const app = new Application()
const env = config()
const HOST = env.HOST || '127.0.0.1'
const PORT = env.PORT || 7700


app.use(
  router.routes(),
  router.allowedMethods()
)

console.log(`${PORT}に接続中`)

await app.listen(`${HOST}:${PORT}`)