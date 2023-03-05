import Item from "antd/es/list/Item";
import Popover from "antd/es/popover";
import { DataContext } from "context/GlobalContext";
import React, { useContext, useState } from "react";
import styled from "styled-components"
import { LandItem } from "types/Land";
import { PlantOre, PLANTS, Square } from "types/Plant";
import Carrot from "./Carrot";
interface Props {
    onPlant: (landIndex: number, plantSelect: PlantOre) => void;
    landIndex: number;
    land: Square[],
    landItem: LandItem | any
}

const Field: React.FC<Props> = ({ onPlant, land, landItem, landIndex }) => {
    console.log("🚀 ~ file: Field.tsx:17 ~ landItem:", landItem)
    const [openPopOver, setPopOver] = useState<boolean>(false)
    const [selectItem, setlectItem] = useState<LandItem>()
    const handleOpenChange = (newOpen: boolean) => {

        setPopOver(newOpen);
    };

    const getPopupContainer = (triggerNode: HTMLElement) => {
        return triggerNode.parentNode as HTMLElement;
    };
    const handleSelectPlant = (item: any) => {

        onPlant(landIndex, item.plant)
        setlectItem(item)
        setPopOver(false);
    }
    const plant = PLANTS.find(item => item.plant === landItem.plant)
    const renderSeeding = () => {
        if (plant?.plant === PlantOre.Carrot)
            return (
                <Carrot />
            )

        if (plant?.plant === PlantOre.Corn)
            return (
                <Carrot />
            )
    }

    return (
        <>
            <FieldStyled>
                <PoppOverStyled
                    className="custom-popover"
                    content={
                        landItem.plant === PlantOre.None ?
                            <div className="plant-list">
                                {
                                    PLANTS.map((item, index) => (
                                        <div className="item-plant" key={index} onClick={() => handleSelectPlant(item)}>
                                            <div style={{

                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}>
                                                <img src={item.image} style={{
                                                    width: "30px",
                                                    height: "30px",

                                                }} />
                                            </div>
                                            <div style={{ fontSize: "10px" }}>
                                                {
                                                    item.name
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            : <div>
                                -{plant?.buyPrice}
                            </div>
                    }
                    title={null}
                    trigger="click"
                    getPopupContainer={getPopupContainer}
                    open={openPopOver}
                    onOpenChange={handleOpenChange}
                >
                    {
                        landItem.plant !== PlantOre.None &&
                        renderSeeding()
                    }
                    <VacantlandImg src="/assets/images/land/farm-area.png"
                    />
                </PoppOverStyled>
            </FieldStyled>
        </>
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
    min-width: 100px;
    .ant-popover-inner{
    background: #da7b2e;
    border-style: solid;
    border-width: 5.25px;
    image-rendering: pixelated;
    border-radius: 13.125px;
    padding: 5px;
    border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAABGdBTUEAALGPC/xhBQAAAAlQTFRFAAAA7qRoGBQlo4eEUgAAAAF0Uk5TAEDm2GYAAAAZSURBVAjXY+BawcCgGsbAMIGxAQODxIHyAIsgB7CF1qipAAAAAElFTkSuQmCC) 22.2222% / 1 / 0 repeat;
    font-family: "Press Start 2P", cursive !important; 
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
    transform: scale(1.5);
    position: relative;
`
const PoppOverStyled = styled(Popover)`
    
`