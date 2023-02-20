import React from 'react'
import styled from 'styled-components'

interface DirtProps {
    column?: number;
    row?: number;
    children?: React.ReactElement
}
const DirtStyled = styled.div`
  position: absolute;
  background: url("/assets/images/land/dirt/plain.png");
  height: calc(1000px / 20);
  background-size: cover;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  position: relative;
`
const Dirt: React.FC<DirtProps> = ({ column, row, children }) => {
    return (
        <DirtStyled style={{ gridColumn: column, gridRow: row }} >
            {children}
        </DirtStyled>
    )
}

export default Dirt