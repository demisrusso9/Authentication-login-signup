import React, { useContext, useState } from 'react'
import axios from 'axios'
import {
  Form,
  FormControl,
  Label,
  Input,
  Button,
  PasswordChecking,
  ForgotPassword,
  Paragraph,
  Title,
  Link
} from '../styles/components/Register.style'

import {
  verifyPassword,
  minimum,
  lowercase,
  uppercase,
  digit,
  specialCharacter
} from '../utils/verifyPassword'

import { VscVerified } from 'react-icons/vsc'
import { BiErrorCircle } from 'react-icons/bi'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ApiData } from '../context/api'
import { notify } from '../utils/notifications'

export default function Register() {
  const { login, register, email, password, setPassword, setEmail } = useContext(ApiData)

  const checkEmail = (email: string) => {
    return email.trim().search(/^[A-Za-z0-9+_.-]+@\w+.\w+.([\w]{2})/) < 0
  }

  const onSubmitRegister = (e: React.FormEvent) => {
    e.preventDefault()

    if (checkEmail(email)) return notify('warning', 'Email inválido')
    return verifyPassword(password) && register()
  }

  const onSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (checkEmail(email)) return notify('warning', 'Email inválido')
    return login()
  }

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  return (
    <Form onSubmit={!isLoggedIn ? onSubmitRegister : onSubmitLogin}>
      <Title>{!isLoggedIn ? 'Cadastro de conta' : 'Entrar'}</Title>

      <FormControl>
        <Input
          type='text'
          id='email'
          value={email}
          placeholder='example@example.com'
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Label htmlFor='email'>Email</Label>
      </FormControl>

      <FormControl>
        <Input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Label htmlFor='password'>Password</Label>
      </FormControl>
      {!isLoggedIn && (
        <PasswordChecking>
          <Paragraph>
            {minimum(password) ? (
              <BiErrorCircle color='red' />
            ) : (
              <VscVerified color='green' />
            )}
            No mínimo 8 caracteres
          </Paragraph>

          <Paragraph>
            {lowercase(password) ? (
              <BiErrorCircle color='red' />
            ) : (
              <VscVerified color='green' />
            )}
            Uma letra minúscula
          </Paragraph>

          <Paragraph>
            {uppercase(password) ? (
              <BiErrorCircle color='red' />
            ) : (
              <VscVerified color='green' />
            )}
            Uma letra maiúscula
          </Paragraph>

          <Paragraph>
            {digit(password) ? (
              <BiErrorCircle color='red' />
            ) : (
              <VscVerified color='green' />
            )}
            Um digito
          </Paragraph>

          <Paragraph>
            {specialCharacter(password) ? (
              <BiErrorCircle color='red' />
            ) : (
              <VscVerified color='green' />
            )}
            Um caracteres especial (!, @, #, $, %, ${', &'}, *)
          </Paragraph>
        </PasswordChecking>
      )}
      <Button type='submit'>{!isLoggedIn ? 'Cadastrar' : 'Entrar'}</Button>

      <Link onClick={(e) => setIsLoggedIn(!isLoggedIn)}>
        {!isLoggedIn ? 'Já tem conta? Só entrar' : 'Não tem conta? Cadastre-se'}
      </Link>

      {isLoggedIn && <ForgotPassword>Esqueci minha senha</ForgotPassword>}

      <ToastContainer />
    </Form>
  )
}
