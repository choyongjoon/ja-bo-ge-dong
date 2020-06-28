import FourColorsTilesGame from "./FourColorsTilesGame"
import FourColorsTilesZone from "./FourColorsTilesZone"

describe("FourColorsTilesGame", () => {
  let game = new FourColorsTilesGame()

  beforeEach(() => {
    game = new FourColorsTilesGame()
  })

  describe("placeTile()", () => {
    let zone = new FourColorsTilesZone()

    beforeEach(() => {
      zone = new FourColorsTilesZone()
      zone.placeTile = jest.fn()
    })

    it(`zone의 state가 "blocked"이면 zone.placeTile을 호출하지 않아야 한다.`, () => {
      zone.state = "blocked"

      game.tryToPlaceTile(zone)

      expect(zone.placeTile).not.toBeCalled()
    })

    it(`zone의 state가 "placed"이면 zone.placeTile을 호출하지 않아야 한다.`, () => {
      zone.state = "placed"

      game.tryToPlaceTile(zone)

      expect(zone.placeTile).not.toBeCalled()
    })

    it(`zone의 state가 "empty"이면 zone.placeTile을 호출해야 한다.`, () => {
      zone.state = "empty"

      game.tryToPlaceTile(zone)

      expect(zone.placeTile).toBeCalled()
    })
  })
})
