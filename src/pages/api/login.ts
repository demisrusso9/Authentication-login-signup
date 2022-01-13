import { VercelRequest, VercelResponse } from '@vercel/node'
import bcrypt from 'bcrypt'
import connectToDatabase from './database/db'

export default async (req: VercelRequest, res: VercelResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI as string)
  const collection = await db.collection(process.env.MONGODB_COLLECTION as string)

  const { email, password } = req.query

  const emailExists = await collection.findOne({ email })

  if (!emailExists) return res.send({ message: 'E-mail não encontrado' })

  //@ts-ignore
  return bcrypt.compare(password, emailExists.hash, (err, result) => {
    if (!result) return res.send({ message: 'Senha incorreta' })
    if (result) return res.send({ message: 'Bem-vindo' })
  })
}
