import { MongoClient } from './deps.ts'

const client = new MongoClient()
client.connectWithUri('mongodb://test:test@localhost:27017')

const db = client.database('tod')
const menus = db.collection("menus");


const user1 = await menus.find({});

export default db