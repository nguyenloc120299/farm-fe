import { DivStyled } from 'dapp/styles'
import React from 'react'
import styled from 'styled-components'
interface PropsType {
    children?: React.ReactElement;
    column?: number;
    row?: number;
}
const GrassStyled = styled(DivStyled)`
    background: url("/assets/images/land/grass/13.png");
`
const Grass: React.FC<PropsType> = ({ children, column, row }) => {
    return (
        <GrassStyled style={{ gridColumn: column, gridRow: row }}>
            {children}
        </GrassStyled>
    )
}

export default Grass