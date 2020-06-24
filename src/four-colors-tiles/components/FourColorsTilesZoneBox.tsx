import { observer } from "mobx-react"
import React, { FC, useCallback } from "react"
import styled from "styled-components"

import { FourColorsTilesColors } from "../constants/fourColorsTilesColors"
import { useFourColorsTilesContext } from "../FourColorsTilesProvider"
import FourColorsTilesZone from "../models/FourColorsTilesZone"

interface FourColorsTilesZoneBoxProps {
  numColumns: number
  zone: FourColorsTilesZone
}

const FourColorsTilesZoneBox: FC<FourColorsTilesZoneBoxProps> = observer(
  ({ numColumns, zone }) => {
    const { game } = useFourColorsTilesContext()
    const { color, state } = zone

    const onClick = useCallback(() => game.tryToPlaceTile(zone), [zone])

    return (
      <StyledFourColorsTilesZoneBox
        numColumns={numColumns}
        color={color}
        isBlocked={state === "blocked"}
        onClick={onClick}
      >
        <Content />
      </StyledFourColorsTilesZoneBox>
    )
  }
)

export default FourColorsTilesZoneBox

interface StyledFourColorsTilesZoneBoxProps {
  numColumns: number
  color?: FourColorsTilesColors
  isBlocked?: boolean
}

const StyledFourColorsTilesZoneBox = styled.div<
  StyledFourColorsTilesZoneBoxProps
>`
  position: relative;
  width: calc(100% / ${(props) => props.numColumns});
  float: left;
  padding-bottom: calc(100% / ${(props) => props.numColumns});
  background-color: ${(props) =>
    props.isBlocked
      ? props.theme.colors.boardBackground
      : props.theme.colors[props.color] || props.theme.colors.boardEmptyZone};
  cursor: ${(props) => !props.isBlocked && !props.color && "pointer"};
`

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.boardBackground};
`
