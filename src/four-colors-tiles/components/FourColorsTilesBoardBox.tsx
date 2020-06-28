import { observer } from "mobx-react"
import React, { FC } from "react"
import styled from "styled-components"

import { useFourColorsTilesContext } from "../FourColorsTilesProvider"

import FourColorsTilesZoneBox from "./FourColorsTilesZoneBox"

const FourColorsTilesBoardBox: FC = observer(() => {
  const { game } = useFourColorsTilesContext()
  const { board } = game
  const { zoneMatrix } = board

  return (
    <StyledFourColorsTilesBoardBox>
      <Content>
        <Grid>
          {zoneMatrix.map((row) =>
            row.map((zone) => (
              <FourColorsTilesZoneBox
                key={zone.id}
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
