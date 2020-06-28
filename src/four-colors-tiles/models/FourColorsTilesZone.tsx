import { observable, action } from "mobx"
import shortid from "shortid"

import { FourColorsTilesColors } from "../constants/fourColorsTilesColors"

class FourColorsTilesZone {
  @observable
  readonly id = shortid.generate()

  @observable
  state: "blocked" | "placed" | "empty" = "empty"

  @observable
  color?: FourColorsTilesColors

  @action
  init = () => {
    this.state = "empty"
    this.color = undefined
  }

  @action
  block = () => {
    this.state = "blocked"
  }

  @action
  placeTile = (color: FourColorsTilesColors) => {
    this.color = color
    this.state = "placed"
  }

  @action
  removeTile = () => {
    this.color = undefined
    this.state = "empty"
  }
}

export default FourColorsTilesZone
