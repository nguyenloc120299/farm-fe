import Field from "components/objects/Field";
import Grass from "components/objects/Grass";
import Mark from "components/objects/Mark";
import React from "react";
import { LANDS } from "types/Land";
interface Props {
  onPlant: (landIndex: number) => void;
}
const FarmBlock: React.FC<Props> = ({ onPlant }) => {
  const lands = 4;
  return (
    <>
      {LANDS.slice(0, lands).map((item, index) => (
        <Grass column={item.colGrid} row={item.rowGrid} key={index}>
          <Field onPlant={onPlant} landIndex={item.id} />
        </Grass>
      ))}
      {
        <Grass column={LANDS[lands].colGrid} row={LANDS[lands].rowGrid}>
          <Mark />
        </Grass>
      }
    </>
  );
};

export default FarmBlock;
