import { observer } from "mobx-react"
import React, { FC } from "react"

import { useFourColorsTilesContext } from "../FourColorsTilesProvider"

const FourColorsTilesControlBox: FC = observer(() => {
  const { game } = useFourColorsTilesContext()
  const { canUndo, init, undo } = game

  return (
    <>
      <button type="button" onClick={init}>
        다시 시작
      </button>
      <button type="button" onClick={undo} disabled={!canUndo}>
        되돌리기
      </button>
    </>
  )
})

export default FourColorsTilesControlBox
