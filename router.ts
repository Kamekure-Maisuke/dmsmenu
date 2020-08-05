import { Router } from './deps.ts'
import {
  getMenus,
  addMenus,
} from './controller.ts'

const router = new Router()
router
  .get('/menus', getMenus)
  .post('/menus', addMenus)

export default router