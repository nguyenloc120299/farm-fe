import { DivStyled } from 'dapp/styles'
import React from 'react'
import styled from 'styled-components'
const TilesStyled = styled(DivStyled)`
    &.wood-start{
        background: url("/assets/images/ui/assets/wood-start.png");
        transform: scale(1.13);
    }
    &.wood-line{
        background: url("/assets/images/ui/assets/wood-line.png");
        transform: scale(1.13);
    }
    &.stone{
        background: url("/assets/images/land/dirt/stone.png");
    }
    &.top-edge{
        background: url("/assets/images/land/dirt/top-edge.png");
        background-size: 100% !important;
    }
    &.bottom-edge{
        background: url("/assets/images/land/dirt/bottom-edge.png");
        background-size: cover !important;
    }
    &.left-edge{
        background: url("/assets/images/land/dirt/left-edge.png");
        background-size: 100% !important;
    }
    &.top-corner2{
        background: url("/assets/images/land/dirt/top-corner2.png");
        background-size: 100% !important;
    }
     &.bottom-corner{
        background: url("/assets/images/land/dirt/bottom-corner.png");
        background-size: 100% !important;
    }
`
const Tiles = () => {
    return (
        <>
            {/* ----------------stone------------ */}

            <TilesStyled className='stone'
                style={{ gridColumn: "2", gridRow: "3" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "3", gridRow: "3" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "4", gridRow: "3" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "5", gridRow: "3" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "6", gridRow: "3" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "7", gridRow: "3" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "8", gridRow: "3" }}
            />

            {/* ------------------wood-start--------------- */}
            <TilesStyled className='wood-start'
                style={{ gridColumn: "2", gridRow: "3" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "6", gridRow: "3" }}
            />
            {/* ----------wood-line------------- */}

            <TilesStyled className='wood-line'
                style={{ gridColumn: "2", gridRow: "3" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "3", gridRow: "3" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "4", gridRow: "3" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "5", gridRow: "3" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "6", gridRow: "3" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "7", gridRow: "3" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "8", gridRow: "3" }}
            />


            {/* ----------top-edge------------- */}

            <TilesStyled className='top-edge'
                style={{ gridColumn: "2", gridRow: "2" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "3", gridRow: "2" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "4", gridRow: "2" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "5", gridRow: "2" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "6", gridRow: "2" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "7", gridRow: "2" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "8", gridRow: "2" }}
            />


            {/* --------bottom-edge--------------- */}

            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "2", gridRow: "8" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "3", gridRow: "8" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "4", gridRow: "8" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "5", gridRow: "8" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "6", gridRow: "8" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "7", gridRow: "8" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "8", gridRow: "8" }}
            />
            {/* ------------left-edge------------ */}

            <TilesStyled className='left-edge'
                style={{ gridColumn: "1", gridRow: "3" }}
            />
            <TilesStyled className='left-edge'
                style={{ gridColumn: "1", gridRow: "4" }}
            />
            <TilesStyled className='left-edge'
                style={{ gridColumn: "1", gridRow: "5" }}
            />
            <TilesStyled className='left-edge'
                style={{ gridColumn: "1", gridRow: "6" }}
            />
            <TilesStyled className='left-edge'
                style={{ gridColumn: "1", gridRow: "7" }}
            />

            {/* ---------top-corner2----------------------- */}
            <TilesStyled className='top-corner2'
                style={{ gridColumn: "1", gridRow: "2" }}
            />

            {/* ---------------------bottom-corner2-------------------- */}
            <TilesStyled className='bottom-corner'
                style={{ gridColumn: "1", gridRow: "8" }}
            />
        </>
    )
}

export default Tiles