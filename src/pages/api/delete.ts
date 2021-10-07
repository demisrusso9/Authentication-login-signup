import { VercelRequest, VercelResponse } from '@vercel/node'
import { ObjectId } from 'mongodb'
import getConnectionDatabase from './database/db'

export default async (req: VercelRequest, res: VercelResponse) => {
  const db = await getConnectionDatabase(process.env.MONGODB_URI as string)
  const collection = db.collection('login')

  //@ts-ignore
  await collection.deleteOne({ _id: ObjectId(req.query.id) })

  return res.status(200).json({ message: 'Deletado' })
}
