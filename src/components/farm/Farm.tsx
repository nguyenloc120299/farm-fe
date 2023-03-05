import { FarmStyled } from "components/styles/farmStyles";
import { ACTIONS } from "context/Actions";
import { DataContext } from "context/GlobalContext";
import { useCallback, useContext, useState } from "react";
import { Action, PlantOre, PLANTS, Square, TransactionPlant } from "types/Plant";
import Land from "./Land";

const Farm = () => {
  const { state } = useContext(DataContext)


  const [lands, setLands] = useState<Square[]>(
    Array(10).fill({
      plant: PlantOre.None,
      createdAt: 0,

    })
  );

  const onPlant = useCallback(async (landIndex: number, plantSelect: PlantOre) => {
    const price = PLANTS.find((item) => item.buyPrice);
    const now = Math.floor(Date.now() / 1000);
    const transaction: TransactionPlant = {
      action: Action.Plant,
      plant: plantSelect,
      landIndex,
      createdAt: now,
    };
    setLands((oldLand) => {
      const newLand = oldLand.map((field, index) =>
        index === landIndex - 1 ? transaction : field
      );
      return newLand;
    });
  }, []);

  return (
    <FarmStyled>
      <Land
        onPlant={onPlant}
        land={lands}
      />
    </FarmStyled>
  );
};

export default Farm;
