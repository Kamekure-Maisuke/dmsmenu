import db from "./db.ts"
import { Context } from './deps.ts'

const menus = db.collection('menus');

type Menus = {
  name: string
  chef: string
  desc: string
}

// all menu list
const getMenus = async ({ response }: Context) => {
  const data = await menus.find({})
  if (data) {
    response.body = data,
    response.status = 200
  } else {
    response.body = 'not found',
    response.status = 204
  }
}

// add menu
const addMenus = async ({ request, response }: { request: any; response: any }) => {
  const body = await request.body()
  if (!request.hasBody) {
    response.status = 404
    response.body = {
      success: false,
      message: 'No data provided',
    }
  }
  try {
    const { name, chef, desc } = body.value
    await menus.insertOne({
      name,
      chef,
      desc,
    })
    response.body = {
      success: true,
      body: `${name}が作成されました。`,
    }
    response.status = 201
  } catch (error) {
    response.body = null
    response.status = 500
  }
}

export { getMenus, addMenus }