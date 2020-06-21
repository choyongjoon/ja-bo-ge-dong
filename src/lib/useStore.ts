import { Context, useContext } from "react"

function useStore<T>(storeContext: Context<T>) {
  const store = useContext(storeContext)
  if (!store) {
    throw Error(`Cannot find ${storeContext.displayName} In Context Provider`)
  }
  return store as NonNullable<T>
}

export default useStore
