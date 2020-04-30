import React, { FC } from "react"
import { hot } from "react-hot-loader/root"
import styled, { ThemeProvider } from "styled-components"

import theme from "./theme"

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Title>Base</Title>
      </div>
    </ThemeProvider>
  )
}

export default hot(App)

const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.main};
`
