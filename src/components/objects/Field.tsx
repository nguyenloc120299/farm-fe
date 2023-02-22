import Popover from "antd/es/popover";
import { DataContext } from "context/GlobalContext";
import React, { useContext, useState } from "react";
import styled from "styled-components"
import { LandItem } from "types/Land";
import { PLANTS, Square } from "types/Plant";
interface Props {
    onPlant: (landIndex: number) => void;
    landIndex: number;
    land: Square[],
    landItem: LandItem
}

const Field: React.FC<Props> = ({ onPlant, land, landItem, landIndex }) => {
    const [openPopOver, setPopOver] = useState<boolean>(false)
    const handleOpenChange = (newOpen: boolean) => {
        setPopOver(newOpen);
    };
    const getPopupContainer = (triggerNode: HTMLElement) => {
        return triggerNode.parentNode as HTMLElement;
    };
    return (
        <FieldStyled>
            <PoppOverStyled
                className="custom-popover"
                content={
                    <div className="plant-list">
                        {
                            PLANTS.map((item, index) => (
                                <div className="item-plant" key={index}>
                                    <div style={{

                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        <img src={item.image} style={{
                                            width: "30px",
                                            height: "30px",

                                        }} />
                                    </div>
                                    <div>
                                        {
                                            item.name
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
                title={null}
                trigger="click"
                getPopupContainer={getPopupContainer}
                open={openPopOver}
                onOpenChange={handleOpenChange}
            >
                <VacantlandImg src="/assets/images/land/farm-area.png"
                    onClick={() => onPlant(landIndex)}
                />
            </PoppOverStyled>
        </FieldStyled>
    )
}

export default Field
const FieldStyled = styled.div`
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
    cursor: pointer;
    z-index: 9;
.ant-popover-content{
    width: 200px;
    .ant-popover-inner{
    background: #da7b2e;
    border-style: solid;
    border-width: 5.25px;
    image-rendering: pixelated;
    border-radius: 13.125px;
    padding: 5px;
    border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAABGdBTUEAALGPC/xhBQAAAAlQTFRFAAAA7qRoGBQlo4eEUgAAAAF0Uk5TAEDm2GYAAAAZSURBVAjXY+BawcCgGsbAMIGxAQODxIHyAIsgB7CF1qipAAAAAElFTkSuQmCC) 22.2222% / 1 / 0 repeat;
    }
    .ant-popover-inner-content{
    /* 125px; */
    padding: 1px;
    }
    .ant-popover-arrow{
        &::before{
            background:#da7b2e
        }
    }
    .ant-popover-inner-content{
      
        .plant-list{
            display: flex;
            gap:10px
        }
       .item-plant{
        cursor: pointer;
        padding: 5px;
        border-radius: 5px;
        &:hover{
            background: #ccc;
        }
       }
       
    }
}
`
const VacantlandImg = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit:cover;
    transform: scale(1);
`
const PoppOverStyled = styled(Popover)`


`