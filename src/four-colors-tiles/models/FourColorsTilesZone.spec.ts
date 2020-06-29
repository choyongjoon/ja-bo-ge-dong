import FourColorsTilesZone from "./FourColorsTilesZone"

describe("FourColorsTilesZone", () => {
  let zone = new FourColorsTilesZone()

  beforeEach(() => {
    zone = new FourColorsTilesZone()
  })

  describe("constructor()", () => {
    it(`id 초기값이 길이가 10이어야 한다.`, () => {
      expect(zone.id).toHaveLength(10)
    })

    it(`state 초기값이 "empty"가 되어야 한다.`, () => {
      expect(zone.state).toBe("empty")
    })

    it(`color 초기값이 undefined가 되어야 한다.`, () => {
      expect(zone.color).toBe(undefined)
    })
  })

  describe("block()", () => {
    it(`state가 "blocked"가 되어야 한다.`, () => {
      zone.block()

      expect(zone.state).toBe("blocked")
    })
  })

  describe("placeTile()", () => {
    it(`"red"가 입력되면 color가 "red"가 되어야 한다.`, () => {
      const color = "red"

      zone.placeTile(color)

      expect(zone.color).toBe(color)
    })

    it(`state가 "placed"가 되어야 한다.`, () => {
      const color = "blue"

      zone.placeTile(color)

      expect(zone.state).toBe("placed")
    })
  })

  describe("removeTile()", () => {
    it(`color가 undefined가 되어야 한다.`, () => {
      zone.removeTile()

      expect(zone.color).toBe(undefined)
    })

    it(`state가 "empty"가 되어야 한다.`, () => {
      zone.removeTile()

      expect(zone.state).toBe("empty")
    })
  })
})
