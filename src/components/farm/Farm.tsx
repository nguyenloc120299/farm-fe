import { FarmStyled } from "components/styles/farmStyles";
import { useCallback, useState } from "react";
import { Action, PlantOre, PLANTS, Square, TransactionPlant } from "types/Plant";
import Land from "./Land";

const Farm = () => {

  const [land, setLand] = useState<Square[]>(
    Array(5).fill({
      plant: PlantOre.None,
      createdAt: 0,
    })
  );

  const onPlant = useCallback(async (landIndex: number) => {
    const price = PLANTS.find((item) => item.buyPrice);
    const now = Math.floor(Date.now() / 1000);
    
   const transaction: TransactionPlant = {
     action: Action.Plant,
     plant: PlantOre.Corn,
     landIndex,
     createdAt: now,
   };

   setLand((oldLand) => {
     const newLand = oldLand.map((field, index) =>
       index === landIndex ? transaction : field
     );
     console.log("🚀 ~ file: Farm.tsx:30 ~ setLand ~ newLand:", newLand)
     return newLand;
   });
  }, []);

  return (
    <FarmStyled>
      <Land onPlant={onPlant} />
    </FarmStyled>
  );
};

export default Farm;
