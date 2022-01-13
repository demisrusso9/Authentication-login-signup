import { VercelRequest, VercelResponse } from '@vercel/node'
import connectToDatabase from './database/db'

export default async (req: VercelRequest, res: VercelResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI as string)
  const collection = db.collection(process.env.MONGODB_COLLECTION as string)

  const list = await collection.find().toArray()

  return res.status(200).json(list)
}
