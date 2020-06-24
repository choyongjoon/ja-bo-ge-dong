import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    word-break: keep-all;
  }

  body {
    font-family:
      '-apple-system',
      'system-ui',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
  }

  main {
    padding: 0 16px;
  }
`

export default GlobalStyle
