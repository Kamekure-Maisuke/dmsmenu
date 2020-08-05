import { Router } from './deps.ts'
import {
  getMenus,
  addMenus,
} from './controller.ts'

const router = new Router()
router
  .get('/books', getMenus)
  .post('/books', addMenus)

export default router