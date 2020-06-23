import fourColorsTilesColors from "../constants/fourColorsTilesColors"

import FourColorsTilesBoard from "./FourColorsTilesBoard"

describe("FourColorsTilesBoard", () => {
  describe("init()", () => {
    it("zoneMatrix가 N x N 행렬이 되어야 한다. (N: FourColorsTilesBoard.size + 2)", () => {
      const board = new FourColorsTilesBoard(fourColorsTilesColors)

      board.init()

      const { zoneMatrix } = board
      const { size } = FourColorsTilesBoard
      const matrixSize = size + 2

      expect(zoneMatrix).toHaveLength(matrixSize)
      expect(zoneMatrix[0]).toHaveLength(matrixSize)
      expect(zoneMatrix[size - 1]).toHaveLength(matrixSize)
    })
  })

  it("zoneMatrix의 네 모서리가 blocked 상태여야 한다.", () => {
    const board = new FourColorsTilesBoard(fourColorsTilesColors)

    board.init()

    const { zoneMatrix } = board
    const { size } = FourColorsTilesBoard
    const matrixSize = size + 2

    expect(zoneMatrix[0][0].isBlocked).toBe(true)
    expect(zoneMatrix[0][matrixSize - 1].isBlocked).toBe(true)
    expect(zoneMatrix[matrixSize - 1][0].isBlocked).toBe(true)
    expect(zoneMatrix[matrixSize - 1][matrixSize - 1].isBlocked).toBe(true)
  })

  it("zoneMatrix의 네 변에 각 색상이 N개씩 채워져 있어야 한다.", () => {
    const board = new FourColorsTilesBoard(fourColorsTilesColors)

    board.init()

    const countByColors = fourColorsTilesColors.reduce(
      (prev, color) => ({ ...prev, [color]: 0 }),
      {}
    )

    const { zoneMatrix } = board
    const { size } = FourColorsTilesBoard
    const matrixSize = size + 2

    for (let i = 1; i <= size; i++) {
      countByColors[zoneMatrix[0][i].color] += 1
      countByColors[zoneMatrix[i][0].color] += 1
      countByColors[zoneMatrix[matrixSize - 1][i].color] += 1
      countByColors[zoneMatrix[i][matrixSize - 1].color] += 1
    }

    fourColorsTilesColors.forEach((color) => {
      expect(countByColors[color]).toBe(size)
    })
  })

  it("zoneMatrix의 나머지 내부 zone들의 색상은 undefined여야 한다.", () => {
    const board = new FourColorsTilesBoard(fourColorsTilesColors)

    board.init()

    const { zoneMatrix } = board
    const { size } = FourColorsTilesBoard

    for (let i = 1; i <= size; i++) {
      for (let j = 1; j <= size; j++) {
        expect(zoneMatrix[i][j].color).toBeUndefined()
      }
    }
  })
})
