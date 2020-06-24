import React, { FC } from "react"
import { hot } from "react-hot-loader/root"
import { ThemeProvider } from "styled-components"

import "sanitize.css"

import FourColorsTilesProvider from "./four-colors-tiles/FourColorsTilesProvider"
import GlobalStyle from "./GlobalStyle"
import theme from "./theme"

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <h1>
          자작 보드게임 동아리
          <br />
          <small>(팬 사이트)</small>
        </h1>

        <FourColorsTilesProvider />
      </main>
    </ThemeProvider>
  )
}

export default hot(App)
