import React, { FC } from "react"
import styled from "styled-components"

import { FourColorsTilesColors } from "../constants/fourColorsTilesColors"

interface FourColorsTilesZoneBoxProps {
  numColumns: number
  color?: FourColorsTilesColors
  isBlocked?: boolean
}

const FourColorsTilesZoneBox: FC<FourColorsTilesZoneBoxProps> = ({
  numColumns,
  color,
  isBlocked,
}) => {
  return (
    <StyledFourColorsTilesZoneBox
      numColumns={numColumns}
      color={color}
      isBlocked={isBlocked}
    >
      <Content />
    </StyledFourColorsTilesZoneBox>
  )
}

export default FourColorsTilesZoneBox

const StyledFourColorsTilesZoneBox = styled.div<FourColorsTilesZoneBoxProps>`
  position: relative;
  width: calc(100% / ${(props) => props.numColumns});
  float: left;
  padding-bottom: calc(100% / ${(props) => props.numColumns});
  background-color: ${(props) =>
    props.isBlocked
      ? props.theme.colors.boardBackground
      : props.theme.colors[props.color] || props.theme.colors.boardEmptyZone};
`

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.boardEmptyZone};
  border: 1px solid ${(props) => props.theme.colors.boardBackground};
`
