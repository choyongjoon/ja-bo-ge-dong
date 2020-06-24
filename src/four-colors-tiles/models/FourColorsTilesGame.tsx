import { observable } from "mobx"

import fourColorsTilesColors from "../constants/fourColorsTilesColors"

import FourColorsTilesBoard from "./FourColorsTilesBoard"
import FourColorsTilesPlayer from "./FourColorsTilesPlayer"
import FourColorsTilesZone from "./FourColorsTilesZone"

class FourColorsTilesGame {
  @observable
  gameId = 0

  board: FourColorsTilesBoard

  players: FourColorsTilesPlayer[]

  #currentColorIndex = 0

  constructor() {
    this.board = new FourColorsTilesBoard()
    this.players = fourColorsTilesColors.map(
      (color) => new FourColorsTilesPlayer(color)
    )
  }

  init = () => {
    this.gameId++
    this.#currentColorIndex = 0
    this.board.init()
    // this.players.forEach(player => player.init());
  }

  tryToPlaceTile = (zone: FourColorsTilesZone) => {
    if (["blocked", "placed"].includes(zone.state)) return

    const color = fourColorsTilesColors[this.#currentColorIndex]
    zone.placeTile(color)
    this.startNextTurn()
  }

  private startNextTurn = () => {
    this.#currentColorIndex =
      (this.#currentColorIndex + 1) % fourColorsTilesColors.length
  }
}

export default FourColorsTilesGame
