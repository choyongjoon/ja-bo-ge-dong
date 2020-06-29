import UndoMachine from "./UndoMachine"

describe("UndoMachine", () => {
  describe("canUndo", () => {
    it("생성되었을 때 false여야 한다.", () => {
      const undoMachine = new UndoMachine()

      expect(undoMachine.canUndo).toBe(false)
    })
  })
})
