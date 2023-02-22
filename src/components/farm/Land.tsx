import Dirt from "components/objects/Dirt";
import Field from "components/objects/Field";
import Grass from "components/objects/Grass";
import Tiles from "components/objects/Tiles";
import React from "react";
import Farm from "./Farm";
import FarmBlock from "./FarmBlock";
interface Props {
  onPlant: (landIndex: number) => void;
}
const Land : React.FC<Props> = ({onPlant}) => {
  return (
    <>
      <FarmBlock 
            onPlant={onPlant}
      />
      {/* <Grass column={2} row={4}/> */}
      <Grass column={2} row={5} />
      <Grass column={2} row={6} />
      <Grass column={2} row={7} />

      {/* <Grass column={3} row={4} /> */}
      <Grass column={3} row={5} />
      <Grass column={3} row={6} />
      <Grass column={3} row={7} />

      {/* <Grass column={4} row={4} /> */}
      <Grass column={4} row={5} />

      <Grass column={4} row={6} />
      <Grass column={4} row={7} />

      <Grass column={5} row={4} />
      <Grass column={5} row={5} />
      <Grass column={5} row={6} />
      <Grass column={5} row={7} />

      <Grass column={6} row={4} />
      <Grass column={6} row={5} />
      <Grass column={6} row={6} />
      <Grass column={6} row={7} />

      <Grass column={7} row={4} />
      <Grass column={7} row={5} />
      <Grass column={7} row={6} />
      <Grass column={7} row={7} />
      <Grass column={7} row={8} />
      <Grass column={7} row={9} />
      <Grass column={7} row={10} />
      <Grass column={7} row={11} />
      <Grass column={7} row={12} />

      <Grass column={8} row={4} />
      <Grass column={8} row={5} />
      <Grass column={8} row={6} />
      <Grass column={8} row={7} />
      <Grass column={8} row={8} />
      <Grass column={8} row={9} />
      <Grass column={8} row={10} />
      <Grass column={8} row={11} />
      <Grass column={8} row={12} />

      <Grass column={9} row={4} />
      <Grass column={9} row={5} />
      <Grass column={9} row={6} />
      <Grass column={9} row={7} />
      <Grass column={9} row={8} />
      <Grass column={9} row={9} />
      <Grass column={9} row={10} />
      <Grass column={9} row={11} />
      <Grass column={9} row={12} />

      <Grass column={10} row={4} />
      <Grass column={10} row={5} />
      <Grass column={10} row={6} />
      <Grass column={10} row={7} />
      {/* <Grass column={10} row={8} />
            <Grass column={10} row={9} /> */}
      <Grass column={10} row={10} />
      <Grass column={10} row={11} />
      <Grass column={10} row={12} />

      <Grass column={11} row={4} />
      <Grass column={11} row={5} />
      <Grass column={11} row={6} />
      <Grass column={11} row={7} />
      {/* <Grass column={11} row={8} />
            <Grass column={11} row={9} /> */}
      <Grass column={11} row={10} />
      <Grass column={11} row={11} />
      <Grass column={11} row={12} />

      <Grass column={12} row={4} />
      <Grass column={12} row={5} />
      <Grass column={12} row={6} />
      <Grass column={12} row={7} />
      {/* <Grass column={12} row={8} />
            <Grass column={12} row={9} /> */}
      <Grass column={12} row={10} />
      <Grass column={12} row={11} />
      <Grass column={12} row={12} />
      {/* 
            <Grass column={13} row={4} />
            <Grass column={13} row={5} />
            <Grass column={13} row={6} />
            <Grass column={13} row={7} /> */}
      {/* <Grass column={13} row={8} /> */}
      {/* <Grass column={13} row={9} /> */}
      <Grass column={13} row={10} />
      <Grass column={13} row={11} />
      <Grass column={13} row={12} />

      <Grass column={14} row={4} />
      <Grass column={14} row={5} />
      <Grass column={14} row={6} />
      <Grass column={14} row={7} />
      {/* <Grass column={14} row={8} />
            <Grass column={14} row={9} /> */}
      <Grass column={14} row={10} />
      <Grass column={14} row={11} />
      <Grass column={14} row={12} />

      <Grass column={15} row={4} />
      <Grass column={15} row={5} />
      <Grass column={15} row={6} />
      <Grass column={15} row={7} />
      {/* <Grass column={15} row={8} />
            <Grass column={15} row={9} /> */}
      <Grass column={15} row={10} />
      <Grass column={15} row={11} />
      <Grass column={15} row={12} />
      <Grass column={15} row={8} />
      <Grass column={15} row={9} />
      <Grass column={15} row={10} />
      <Grass column={15} row={11} />

      <Grass column={16} row={4} />
      <Grass column={16} row={5} />
      <Grass column={16} row={6} />
      <Grass column={16} row={7} />
      <Grass column={16} row={8} />
      <Grass column={16} row={9} />
      <Grass column={16} row={10} />
      <Grass column={16} row={11} />
      <Grass column={16} row={12} />

      <Grass column={17} row={4} />
      <Grass column={17} row={5} />
      <Grass column={17} row={6} />
      <Grass column={17} row={7} />
      <Grass column={17} row={8} />
      <Grass column={17} row={9} />
      <Grass column={17} row={10} />
      <Grass column={17} row={11} />
      <Grass column={17} row={12} />

      <Grass column={18} row={4} />
      <Grass column={18} row={5} />
      <Grass column={18} row={6} />
      <Grass column={18} row={7} />
      <Grass column={18} row={8} />
      <Grass column={18} row={9} />
      <Grass column={18} row={10} />
      <Grass column={18} row={11} />
      <Grass column={18} row={12} />

      <Tiles />
    </>
  );
};

export default Land;
