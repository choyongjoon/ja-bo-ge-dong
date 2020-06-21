import React, { FC } from "react"
import styled from "styled-components"

import FourColorsTilesZoneBox from "./FourColorsTilesZoneBox"

const FourColorsTilesBoardBox: FC = () => {
  return (
    <StyledFourColorsTilesBoardBox>
      <Content>
        <Grid>
          {[...new Array(64)].map((x, i) => (
            <FourColorsTilesZoneBox key={i} numColumns={8} />
          ))}
        </Grid>
      </Content>
    </StyledFourColorsTilesBoardBox>
  )
}

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
