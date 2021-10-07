import { createContext } from 'react'

type Props = {
  login: () => void
  register: () => void
  email: string
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  setEmail: React.Dispatch<React.SetStateAction<string>>
}

export const ApiData = createContext({} as Props)
