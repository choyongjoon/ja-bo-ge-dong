import FourColorsTilesBoard from "./FourColorsTilesBoard"
import FourColorsTilesPlayer from "./FourColorsTilesPlayer"

class FourColorsTilesGame {
  private colors = ["blue", "yellow", "green", "red"]

  private players: FourColorsTilesPlayer[]

  private board: FourColorsTilesBoard

  constructor() {
    this.players = this.colors.map((color) => new FourColorsTilesPlayer(color))
    this.board = new FourColorsTilesBoard(this.colors)
  }
}

export default FourColorsTilesGame
