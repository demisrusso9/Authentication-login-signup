import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
  }

  body {
    background-color: hsl(240, 50%, 20%);
  }

 ::-webkit-scrollbar {
   display: none;
 }
`
