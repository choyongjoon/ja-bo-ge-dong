import FourColorsTilesGame from "./FourColorsTilesGame"

describe("FourColorsTilesGame", () => {
  describe("constructor()", () => {
    it("생성시 에러가 발생하지 않아야 한다.", () => {
      const game = new FourColorsTilesGame()

      expect(game).toBeInstanceOf(FourColorsTilesGame)
    })
  })
})
