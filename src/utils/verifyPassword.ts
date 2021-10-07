import { notify } from './notifications'

export const minimum = (text: string) => text.trim().length < 8
export const lowercase = (text: string) => text.trim().search(/[a-z]/) < 0
export const uppercase = (text: string) => text.trim().search(/[A-Z]/) < 0
export const digit = (text: string) => text.trim().search(/[0-9]/) < 0
export const specialCharacter = (text: string) =>
  text.trim().search(/[!@#$%&*]/) < 0

export const verifyPassword = (text: string) => {
  let error = 0

  // Validate Password
  lowercase(text) && (notify('error', 'Um digito'), error++)
  uppercase(text) && (notify('error', 'Uma letra maiúscula'), error++)
  minimum(text) && (notify('error', 'No mínimo 8 caracteres'), error++)
  digit(text) && (notify('error', 'Uma letra minúscula'), error++)

  specialCharacter(text) &&
    (notify('error', 'Um caracteres especial (!, @, #, $, %, &, *)'), error++)

  return error === 0
}
