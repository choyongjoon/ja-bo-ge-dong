import { observable, action } from "mobx"

import { FourColorsTilesColors } from "../constants/fourColorsTilesColors"

class FourColorsTilesZone {
  @observable
  state: "blocked" | "placed" | "empty" = "empty"

  @observable
  color?: FourColorsTilesColors

  @action
  block = () => {
    this.state = "blocked"
  }

  @action
  placeTile = (color: FourColorsTilesColors) => {
    this.color = color
    this.state = "placed"
  }
}

export default FourColorsTilesZone
