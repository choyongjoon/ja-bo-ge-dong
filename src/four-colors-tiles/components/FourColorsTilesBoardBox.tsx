import { observer } from "mobx-react"
import React, { FC } from "react"
import styled from "styled-components"

import { useFourColorsTilesContext } from "../FourColorsTilesProvider"

import FourColorsTilesZoneBox from "./FourColorsTilesZoneBox"

const FourColorsTilesBoardBox: FC = observer(() => {
  const { game } = useFourColorsTilesContext()
  const { zoneMatrix } = game.board

  return (
    <StyledFourColorsTilesBoardBox>
      <Content>
        <Grid>
          {zoneMatrix.map((row, i) =>
            row.map((zone, j) => (
              <FourColorsTilesZoneBox
                // eslint-disable-next-line react/no-array-index-key
                key={`(${i},${j})`}
                numColumns={row.length}
                zone={zone}
              />
            ))
          )}
        </Grid>
      </Content>
    </StyledFourColorsTilesBoardBox>
  )
})

export default FourColorsTilesBoardBox

const StyledFourColorsTilesBoardBox = styled.div`
  position: relative;
  max-width: 450px;
  margin: 0 -16px;

  background-color: ${(props) => props.theme.colors.boardBackground};

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`

const Grid = styled.div`
  padding: 25px;
  flex: 1;
`
