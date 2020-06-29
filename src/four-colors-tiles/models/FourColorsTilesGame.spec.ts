import FourColorsTilesGame from "./FourColorsTilesGame"
import FourColorsTilesZone from "./FourColorsTilesZone"

describe("FourColorsTilesGame", () => {
  let game = new FourColorsTilesGame()

  beforeEach(() => {
    game = new FourColorsTilesGame()
  })

  describe("init()", () => {
    it("this.board.init()을 호출해야 한다.", () => {
      game.board.init = jest.fn()

      game.init()

      expect(game.board.init).toBeCalled()
    })
  })

  describe("tryToPlaceTile()", () => {
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

  describe("undo()", () => {
    it(`tryToPlaceTile() 후 undo() 했을 때, zone의 color와 state가 초기값과 같아야 한다.`, () => {
      const zone = game.board.zoneMatrix[1][1]
      const initialColor = zone.color
      const initialState = zone.state

      game.tryToPlaceTile(zone)
      game.undo()

      expect(zone.color).toBe(initialColor)
      expect(zone.state).toBe(initialState)
    })

    it(`tryToPlaceTile(), undo(), tryToPlaceTile() 했을 때, 첫번째 호출시와 세번째 호출시 zone의 color가 서로 같아야 한다.`, () => {
      const zone = game.board.zoneMatrix[1][1]

      game.tryToPlaceTile(zone)
      const firstColor = zone.color
      game.undo()
      game.tryToPlaceTile(zone)
      const secondColor = zone.color

      expect(secondColor).toBe(firstColor)
    })
  })
})
