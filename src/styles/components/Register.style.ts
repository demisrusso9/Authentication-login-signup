import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0rem 3rem 1rem;
  max-width: 380px;
  margin-bottom: 0.8rem;

  background-color: hsl(120, 0%, 85%);

  > div + div {
    margin-top: 1.8rem;
  }
`

export const FormControl = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  background-color: white;
  border-radius: 5px;
`

export const Label = styled.label`
  position: absolute;
  top: 0px;
  left: 3px;
  color: blue;
  transition: 0.4s;
`
export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 0;
  border-radius: 5px;
  padding: 0 1rem;
  text-align: center;
  outline: 0;

  &:focus {
    ~ label {
      position: absolute;
      top: -25px;
      transition: 0.4s;
      font-size: 0.8rem;
    }
  }
`
export const Button = styled.button`
  height: 40px;
  width: 100%;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
`

export const PasswordChecking = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 1rem 0;

  li + li {
    margin-top: 0.5rem;
  }
`

export const Paragraph = styled.li`
  font-size: 0.8rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
  }
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  margin: 1rem 0 1.8rem;
`

export const Link = styled.a`
  cursor: pointer;
  text-decoration: underline;
  font-weight: 500;
  font-size: 0.8rem;
  margin: 0.8rem 0;
`
export const ForgotPassword = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  margin: 0;

  &:hover {
    text-decoration: underline;
  }
`
