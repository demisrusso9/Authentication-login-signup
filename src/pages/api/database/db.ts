import { MongoClient, Db } from 'mongodb'

let cachedDB: Db

export default async function connectToDatabase(uri: string) {
  if (cachedDB) return cachedDB

  const client = await MongoClient.connect(uri)
  const dbName = new URL(uri).pathname.substring(1)
  const db = client.db(dbName)

  cachedDB = db
  return db
}
