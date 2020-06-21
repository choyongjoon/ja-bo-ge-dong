import { observable, action } from "mobx"

import { FourColorsTilesColors } from "../constants/fourColorsTilesColors"

class FourColorsTilesZone {
  @observable
  isBlocked = false

  @observable
  color?: FourColorsTilesColors

  @action
  block = () => {
    this.isBlocked = true
  }

  @action
  setColor = (color: FourColorsTilesColors) => {
    this.color = color
  }
}

export default FourColorsTilesZone
