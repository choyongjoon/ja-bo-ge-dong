import { createContext } from "react"

function createReactContext<T>(ctx: T, displayName?: string) {
  const context = createContext(ctx)
  context.displayName = displayName
  return context
}

export default createReactContext
