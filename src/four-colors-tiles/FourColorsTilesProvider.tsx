import React, { useState } from "react"

import createReactContext from "../lib/createReactContext"
import useStore from "../lib/useStore"

import FourColorsTilesArticle from "./FourColorsTilesArticle"
import FourColorsTilesGame from "./models/FourColorsTilesGame"

interface LocalStores {
  game: FourColorsTilesGame
}

const FourColorsTilesContext = createReactContext<LocalStores | null>(
  null,
  "FourColorsTilesContext"
)

export const useFourColorsTilesContext = () => useStore(FourColorsTilesContext)

const FourColorsTilesProvider: React.FC = () => {
  const [value] = useState(() => ({
    game: new FourColorsTilesGame(),
  }))

  return (
    <FourColorsTilesContext.Provider value={value}>
      <FourColorsTilesArticle />
    </FourColorsTilesContext.Provider>
  )
}

export default FourColorsTilesProvider
