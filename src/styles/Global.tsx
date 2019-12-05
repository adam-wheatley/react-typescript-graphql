import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

  html, body {
    font-family: 'Nunito', sans-serif;
    background: #F1F2F5;
    color: #545e6f;
  }
`

export default GlobalStyle;
