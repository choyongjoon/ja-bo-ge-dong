import React, { FC } from "react"
import { hot } from "react-hot-loader/root"
import { ThemeProvider } from "styled-components"

import FourColorsTilesArticle from "./four-colors-tiles/FourColorsTilesArticle"
import GlobalStyle from "./GlobalStyle"
import theme from "./theme"

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <h1>
          자작 보드게임 동아리
          <br /> <small>(팬 사이트)</small>
        </h1>

        <FourColorsTilesArticle />
      </main>
    </ThemeProvider>
  )
}

export default hot(App)
