import fourColorsTilesColors from "../constants/fourColorsTilesColors"

import FourColorsTilesBoard from "./FourColorsTilesBoard"
import FourColorsTilesPlayer from "./FourColorsTilesPlayer"

class FourColorsTilesGame {
  private players: FourColorsTilesPlayer[]

  private board: FourColorsTilesBoard

  constructor() {
    this.players = fourColorsTilesColors.map(
      (color) => new FourColorsTilesPlayer(color)
    )
    this.board = new FourColorsTilesBoard(fourColorsTilesColors)
  }

  public init = () => {
    // this.players.forEach(player => player.init());
    // this.board.init();
  }
}

export default FourColorsTilesGame
