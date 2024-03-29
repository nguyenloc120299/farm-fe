import { DivStyled } from 'dapp/styles'
import React from 'react'
import styled from 'styled-components'
import Grass from './Grass'
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
    &.right-edge{
        background: url("/assets/images/land/dirt/right-edge.png");
        background-size: 100% !important;
    }
    &.bottom-corner2{
         background: url("/assets/images/land/dirt/bottom-corner2.png");
            background-size: cover !important;
    }
    &.top-corner{
        background: url("/assets/images/land/dirt/top-corner.png");
    }
    &.bridge{
        background: url("/assets/images/ui/bridge.png");
        transform: scale(1.5);
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
            <TilesStyled className='stone'
                style={{ gridColumn: "9", gridRow: "3" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "10", gridRow: "3" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "11", gridRow: "3" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "12", gridRow: "3" }}
            />

            <TilesStyled className='stone'
                style={{ gridColumn: "14", gridRow: "3" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "15", gridRow: "3" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "16", gridRow: "3" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "17", gridRow: "3" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "18", gridRow: "3" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "10", gridRow: "9" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "11", gridRow: "9" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "12", gridRow: "9" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "13", gridRow: "9" }}
            />
            <TilesStyled className='stone'
                style={{ gridColumn: "14", gridRow: "9" }}
            />

            {/* ------------------wood-start--------------- */}
            <TilesStyled className='wood-start'
                style={{ gridColumn: "2", gridRow: "3" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "4", gridRow: "3" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "6", gridRow: "3" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "8", gridRow: "3" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "10", gridRow: "3" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "12", gridRow: "3" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "14", gridRow: "3" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "16", gridRow: "3" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "18", gridRow: "3" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "19", gridRow: "3" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "13", gridRow: "3" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "10", gridRow: "9" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "13", gridRow: "9" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "14", gridRow: "9" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "12", gridRow: "9" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "11", gridRow: "9" }}
            />
            <TilesStyled className='wood-start'
                style={{ gridColumn: "15", gridRow: "9" }}
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
            <TilesStyled className='wood-line'
                style={{ gridColumn: "9", gridRow: "3" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "10", gridRow: "3" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "11", gridRow: "3" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "12", gridRow: "3" }}
            />

            <TilesStyled className='wood-line'
                style={{ gridColumn: "14", gridRow: "3" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "15", gridRow: "3" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "16", gridRow: "3" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "17", gridRow: "3" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "18", gridRow: "3" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "10", gridRow: "9" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "11", gridRow: "9" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "12", gridRow: "9" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "13", gridRow: "9" }}
            />
            <TilesStyled className='wood-line'
                style={{ gridColumn: "14", gridRow: "9" }}
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
            <TilesStyled className='top-edge'
                style={{ gridColumn: "9", gridRow: "2" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "10", gridRow: "8" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "11", gridRow: "2" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "10", gridRow: "2" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "12", gridRow: "2" }}
            />

            <TilesStyled className='top-edge'
                style={{ gridColumn: "14", gridRow: "2" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "15", gridRow: "2" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "16", gridRow: "2" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "17", gridRow: "2" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "18", gridRow: "2" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "11", gridRow: "8" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "12", gridRow: "8" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "13", gridRow: "8" }}
            />
            <TilesStyled className='top-edge'
                style={{ gridColumn: "14", gridRow: "8" }}
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
                style={{ gridColumn: "7", gridRow: "13" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "8", gridRow: "13" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "9", gridRow: "13" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "10", gridRow: "13" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "11", gridRow: "13" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "12", gridRow: "13" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "13", gridRow: "13" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "14", gridRow: "13" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "15", gridRow: "13" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "16", gridRow: "13" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "17", gridRow: "13" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "18", gridRow: "13" }}
            />

            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "12", gridRow: "8" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "11", gridRow: "8" }}
            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "10", gridRow: "8" }}

            />
            <TilesStyled className='bottom-edge'
                style={{ gridColumn: "14", gridRow: "8" }}
            />
            {/* ------------left-edge------------ */}
            {/* 
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

            <TilesStyled className='left-edge'
                style={{ gridColumn: "6", gridRow: "8" }}
            /> */}
            {/* <TilesStyled className='left-edge'
                style={{ gridColumn: "6", gridRow: "9" }}
            /> */}
            {/* <TilesStyled className='left-edge'
                style={{ gridColumn: "6", gridRow: "10" }}
            /> */}
            {/* <TilesStyled className='left-edge'
                style={{ gridColumn: "6", gridRow: "11" }}
            /> */}
            {/* <TilesStyled className='left-edge'
                style={{ gridColumn: "6", gridRow: "12" }}
            /> */}
            <TilesStyled className='left-edge'
                style={{ gridColumn: "13", gridRow: "3" }}
            />
            <TilesStyled className='left-edge'
                style={{ gridColumn: "13", gridRow: "4" }}
            />
            {/* <TilesStyled className='left-edge'
                style={{ gridColumn: "13", gridRow: "5" }}
            />
            <TilesStyled className='left-edge'
                style={{ gridColumn: "13", gridRow: "6" }}
            />*/}
            <TilesStyled className='left-edge'
                style={{ gridColumn: "13", gridRow: "7" }}
            />
            <TilesStyled className='left-edge'
                style={{ gridColumn: "14", gridRow: "8" }}
            />
            {/* -----------right-edge----------------------- */}

            {/* <TilesStyled className='right-edge'
                style={{ gridColumn: "19    ", gridRow: "3" }}
            />
            <TilesStyled className='right-edge'
                style={{ gridColumn: "19    ", gridRow: "4" }}
            />
            <TilesStyled className='right-edge'
                style={{ gridColumn: "19    ", gridRow: "5" }}
            />
            <TilesStyled className='right-edge'
                style={{ gridColumn: "19    ", gridRow: "6" }}
            />
            <TilesStyled className='right-edge'
                style={{ gridColumn: "19    ", gridRow: "7" }}
            />
            <TilesStyled className='right-edge'
                style={{ gridColumn: "19    ", gridRow: "8" }}
            />
            <TilesStyled className='right-edge'
                style={{ gridColumn: "19    ", gridRow: "9" }}
            />
            <TilesStyled className='right-edge'
                style={{ gridColumn: "19    ", gridRow: "10" }}
            /> */}
            {/* <TilesStyled className='right-edge'
                style={{ gridColumn: "19    ", gridRow: "11" }}
            />
            <TilesStyled className='right-edge'
                style={{ gridColumn: "19    ", gridRow: "12" }}
            /> */}
            <TilesStyled className='right-edge'
                style={{ gridColumn: "13", gridRow: "3" }}
            />
            <TilesStyled className='right-edge'
                style={{ gridColumn: "13", gridRow: "4" }}
            />
            {/* <TilesStyled className='right-edge'
                style={{ gridColumn: "13", gridRow: "5" }}
            /> */}
            {/* <TilesStyled className='right-edge'
                style={{ gridColumn: "13", gridRow: "6" }}
            /> */}
            <TilesStyled className='right-edge'
                style={{ gridColumn: "13", gridRow: "7" }}
            />
            <TilesStyled className='right-edge'
                style={{ gridColumn: "10", gridRow: "8" }}
            />

            {/* ---------top-corner2----------------------- */}
            {/* <TilesStyled className='top-corner2'
                style={{ gridColumn: "1", gridRow: "2" }}
            /> */}
            <TilesStyled className='top-corner2'
                style={{ gridColumn: "13", gridRow: "2" }}
            />
            <TilesStyled className='top-corner'
                style={{ gridColumn: "19", gridRow: "2" }}
            />
            <TilesStyled className='top-corner'
                style={{ gridColumn: "13", gridRow: "2" }}
            />
            {/* ---------------------bottom-corner2-------------------- */}
            {/* <TilesStyled className='bottom-corner'
                style={{ gridColumn: "1", gridRow: "8" }}
            /> */}
            {/* <TilesStyled className='bottom-corner'
                style={{ gridColumn: "6", gridRow: "13" }}
            /> */}
            <TilesStyled className='bottom-corner'
                style={{ gridColumn: "13", gridRow: "8" }}
            />
            {/* <TilesStyled className='bottom-corner2'
                style={{ gridColumn: "19", gridRow: "13" }}
            /> */}
            {/* <TilesStyled className='bottom-corner2'
                style={{ gridColumn: "19", gridRow: "13" }}
            /> */}
            <TilesStyled className='bottom-corner2'
                style={{ gridColumn: "13", gridRow: "8" }}
            />

            <TilesStyled className='bridge'
                style={{ gridColumn: "13", gridRow: "5" }}
            />
            <TilesStyled className='bridge'
                style={{ gridColumn: "13", gridRow: "6" }}
            />
            <Grass row={8} column={2}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={8} column={3}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={8} column={4}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={8} column={5}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={8} column={6}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={13} column={8}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={13} column={9}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={13} column={10}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={13} column={11}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={13} column={12}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={13} column={13}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={13} column={14}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={13} column={15}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={13} column={16}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={13} column={17}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={13} column={18}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>
            <Grass row={13} column={7}>
                <img src='/assets/images/land/dirt/edge.png' style={{
                    width: "100%",
                    height: "100%",

                }} />
            </Grass>

        </>
    )
}

export default Tiles