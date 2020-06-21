import fourColorsTilesColors from "../constants/fourColorsTilesColors"

import FourColorsTilesBoard from "./FourColorsTilesBoard"
import FourColorsTilesPlayer from "./FourColorsTilesPlayer"

class FourColorsTilesGame {
  board: FourColorsTilesBoard

  players: FourColorsTilesPlayer[]

  constructor() {
    this.board = new FourColorsTilesBoard(fourColorsTilesColors)
    this.players = fourColorsTilesColors.map(
      (color) => new FourColorsTilesPlayer(color)
    )
  }

  public init = () => {
    this.board.init()
    // this.players.forEach(player => player.init());
  }
}

export default FourColorsTilesGame
