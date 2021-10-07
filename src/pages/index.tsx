import { useState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Database from '../components/Database'
import Authenticate from '../components/Authenticate'
import { Container } from '../styles/pages/Home.styles'
import { ApiData } from '../context/api'
import { notify } from '../utils/notifications'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function register() {
    await axios
      .post('/api/register', { email, password })
      .then((res) => notify('info', res.data.message))
  }

  async function login() {
    await axios
      .get('/api/login', { params: { email, password } })
      .then((res) => notify('info', res.data.message))
  }

  return (
    <Container>
      <Head>
        <title>Cadastro de contas</title>
      </Head>

      <ApiData.Provider
        value={{
          login,
          register,
          email,
          setEmail,
          password,
          setPassword
        }}
      >
        <Authenticate />
        <Database />
      </ApiData.Provider>
    </Container>
  )
}
