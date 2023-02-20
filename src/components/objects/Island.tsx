import React from 'react'
import styled from 'styled-components'
const IslandStyled = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 228.375px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        image-rendering: pixelated;
    }
`
const Island = () => {
    return (
        <IslandStyled>
            <img src="/assets/images/ui/left.webp" />
        </IslandStyled>
    )
}

export default Island