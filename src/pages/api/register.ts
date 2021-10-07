import { VercelRequest, VercelResponse } from '@vercel/node'
import bcrypt from 'bcrypt'
import connectToDatabase from './database/db'

export default async (req: VercelRequest, res: VercelResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI as string)
  const collection = db.collection('login')

  const { email, password } = req.body

  const emailExists = await collection.findOne({ email })
  if (emailExists) return res.send({ message: 'E-mail já existente' })

  return bcrypt.hash(password, 10, async (err, hash) => {
    if (err) return res.send({ message: err })
    await collection.insertOne({ email, hash })
    return res.status(201).send({ message: 'Conta criada!' })
  })
}
