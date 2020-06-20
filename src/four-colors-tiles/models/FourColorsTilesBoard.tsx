import fourColorsTilesColors, {
  FourColorsTilesColors,
} from "../constants/fourColorsTilesColors"

import FourColorsTilesZone from "./FourColorsTilesZone"

class FourColorsTilesBoard {
  static readonly size = 6

  zoneMatrix: FourColorsTilesZone[][]

  #colors: FourColorsTilesColors[]

  constructor(colors: FourColorsTilesColors[]) {
    this.#colors = colors

    this.init()
  }

  init = () => {
    const { size } = FourColorsTilesBoard
    const matrixSize = size + 2

    this.zoneMatrix = [...new Array(matrixSize)].map(() =>
      [...new Array(matrixSize)].map(() => new FourColorsTilesZone())
    )

    this.blockCornerZones()
    this.putRandomColorsToEdgeZones()
  }

  private blockCornerZones = () => {
    const { size } = FourColorsTilesBoard
    const matrixSize = size + 2

    this.zoneMatrix[0][0].block()
    this.zoneMatrix[0][matrixSize - 1].block()
    this.zoneMatrix[matrixSize - 1][0].block()
    this.zoneMatrix[matrixSize - 1][matrixSize - 1].block()
  }

  private putRandomColorsToEdgeZones = () => {
    const { size } = FourColorsTilesBoard
    const matrixSize = size + 2

    const randomColors = [
      ...new Array(size).fill(fourColorsTilesColors[0]),
      ...new Array(size).fill(fourColorsTilesColors[1]),
      ...new Array(size).fill(fourColorsTilesColors[2]),
      ...new Array(size).fill(fourColorsTilesColors[3]),
    ]

    for (let i = 0; i < randomColors.length; i++) {
      const randomIndex = Math.floor(Math.random() * (i + 1))
      const temp = randomColors[randomIndex]
      randomColors[randomIndex] = randomColors[i]
      randomColors[i] = temp
    }

    let j = 0
    for (let i = 1; i <= size; i++) {
      this.zoneMatrix[0][i].setColor(randomColors[j++])
      this.zoneMatrix[i][0].setColor(randomColors[j++])
      this.zoneMatrix[matrixSize - 1][i].setColor(randomColors[j++])
      this.zoneMatrix[i][matrixSize - 1].setColor(randomColors[j++])
    }
  }
}

export default FourColorsTilesBoard
