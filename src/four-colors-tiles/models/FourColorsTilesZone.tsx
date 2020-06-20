import { FourColorsTilesColors } from "../constants/fourColorsTilesColors"

class FourColorsTilesZone {
  #isBlocked = false

  #color?: FourColorsTilesColors

  get isBlocked() {
    return this.#isBlocked
  }

  get color() {
    return this.#color
  }

  block = () => {
    this.#isBlocked = true
  }

  setColor = (color: FourColorsTilesColors) => {
    this.#color = color
  }
}

export default FourColorsTilesZone
