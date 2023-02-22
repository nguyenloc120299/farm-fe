import Field from "components/objects/Field";
import Grass from "components/objects/Grass";
import Mark from "components/objects/Mark";
import React from "react";
import { LANDS } from "types/Land";
import { PlantItem, Square } from "types/Plant";
interface Props {
  onPlant: (landIndex: number) => void;
  land: Square[],
}
const FarmBlock: React.FC<Props> = ({ onPlant, land }) => {
  const lands = 10;
  return (
    <>
      {LANDS.slice(0, lands).map((item, index) => (
        <Grass column={item.colGrid} row={item.rowGrid} key={index}>
          <Field
            onPlant={onPlant}
            landIndex={item.id}
            land={land}
            landItem={item}
          />
        </Grass>
      ))}
      {
        lands < 18 &&
        <Grass column={LANDS[lands].colGrid} row={LANDS[lands].rowGrid}>
          <Mark />
        </Grass>
      }
    </>
  );
};

export default FarmBlock;
