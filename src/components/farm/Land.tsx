import Tiles from "components/objects/Tiles";
import Platform from "components/ui/Platform";
import React from "react";
import { PlantOre, Square } from "types/Plant";
import FarmBlock from "./FarmBlock";
interface Props {
    onPlant: (landIndex: number, plantSelect: PlantOre) => void;
    land: Square[]
}
const Land: React.FC<Props> = ({ onPlant, land }) => {
    return (
        <>
            <FarmBlock
                onPlant={onPlant}
                land={land}
            />
            <Platform />
            <Tiles />
        </>
    );
};

export default Land;
