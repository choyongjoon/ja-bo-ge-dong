import fourColorsTilesColors from "../constants/fourColorsTilesColors"

import FourColorsTilesBoard from "./FourColorsTilesBoard"
import FourColorsTilesPlayer from "./FourColorsTilesPlayer"
import FourColorsTilesZone from "./FourColorsTilesZone"
import UndoMachine, { Action } from "./UndoMachine"

const PLACE_TILE = "PLACE_TILE"

interface PlaceTileAction extends Action {
  payload: {
    zoneId: string
  }
}

class FourColorsTilesGame extends UndoMachine {
  board: FourColorsTilesBoard

  players: FourColorsTilesPlayer[]

  #currentColorIndex = 0

  constructor() {
    super()
    this.board = new FourColorsTilesBoard()
    this.players = fourColorsTilesColors.map(
      (color) => new FourColorsTilesPlayer(color)
    )
    this.registerUndoFunction(PLACE_TILE, this.undoPlaceTile)
  }

  init = () => {
    this.initActionHistory()
    this.#currentColorIndex = 0
    this.board.init()
    // this.players.forEach(player => player.init());
  }

  tryToPlaceTile = (zone: FourColorsTilesZone) => {
    if (["blocked", "placed"].includes(zone.state)) return

    const color = fourColorsTilesColors[this.#currentColorIndex]
    zone.placeTile(color)
    this.pushAction(PLACE_TILE, { zoneId: zone.id })
    this.startNextTurn()
  }

  private startNextTurn = () => {
    this.#currentColorIndex =
      (this.#currentColorIndex + 1) % fourColorsTilesColors.length
  }

  private undoPlaceTile = (action: PlaceTileAction) => {
    const { payload } = action
    this.board.getZone(payload.zoneId).removeTile()
  }
}

export default FourColorsTilesGame
