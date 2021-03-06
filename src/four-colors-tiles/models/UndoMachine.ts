import { observable, computed } from "mobx"

export interface Action {
  type: string
  payload: {}
}

type UndoFunction = (action: Action) => void

class UndoMachine {
  #undoFunctionMap: Map<string, UndoFunction> = new Map()

  @observable
  private actionStack: Action[] = []

  @computed
  get canUndo() {
    return this.actionStack.length > 0
  }

  undo = () => {
    const lastAction = this.actionStack.pop()
    if (!lastAction) return

    const undoFunction = this.#undoFunctionMap.get(lastAction.type)
    if (undoFunction) {
      undoFunction(lastAction)
    }
  }

  protected registerUndoFunction = (
    actionType: string,
    undoFunction: UndoFunction
  ) => {
    this.#undoFunctionMap.set(actionType, undoFunction)
  }

  protected initActionHistory = () => {
    this.actionStack = []
  }

  protected pushAction = (actionType: string, payload: {}) => {
    this.actionStack.push({ type: actionType, payload })
  }
}

export default UndoMachine
