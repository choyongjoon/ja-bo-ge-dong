import { action, computed, observable } from "mobx"

import fourColorsTilesColors from "../constants/fourColorsTilesColors"

import FourColorsTilesZone from "./FourColorsTilesZone"

class FourColorsTilesBoard {
  static readonly size = 6

  @observable
  private zoneIdMatrix: string[][]

  @observable
  private zonesById: { [id: string]: FourColorsTilesZone } = {}

  constructor() {
    const { size } = FourColorsTilesBoard
    const matrixSize = size + 2

    const zoneMatrix = [...new Array(matrixSize)].map(() =>
      [...new Array(matrixSize)].map(() => new FourColorsTilesZone())
    )
    this.zoneIdMatrix = zoneMatrix.map((row) => row.map((zone) => zone.id))
    this.zonesById = {}
    zoneMatrix.forEach((row) =>
      row.forEach((zone) => {
        this.zonesById[zone.id] = zone
      })
    )

    this.initEdgeZones()
  }

  @computed
  get zoneMatrix() {
    return this.zoneIdMatrix.map((row) =>
      row.map((zoneId) => this.zonesById[zoneId])
    )
  }

  init = () => {
    this.zoneMatrix.forEach((row) => row.forEach((zone) => zone.init()))
    this.initEdgeZones()
  }

  private initEdgeZones = () => {
    this.zoneMatrix.forEach((row) => row.forEach((zone) => zone.init()))
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

    const randomColors = fourColorsTilesColors.flatMap((color) =>
      new Array(size).fill(color)
    )

    for (let i = 0; i < randomColors.length; i++) {
      const randomIndex = Math.floor(Math.random() * (i + 1))
      const temp = randomColors[randomIndex]
      randomColors[randomIndex] = randomColors[i]
      randomColors[i] = temp
    }

    let j = 0
    for (let i = 1; i <= size; i++) {
      this.zoneMatrix[0][i].placeTile(randomColors[j++])
      this.zoneMatrix[i][0].placeTile(randomColors[j++])
      this.zoneMatrix[matrixSize - 1][i].placeTile(randomColors[j++])
      this.zoneMatrix[i][matrixSize - 1].placeTile(randomColors[j++])
    }
  }
}

export default FourColorsTilesBoard
