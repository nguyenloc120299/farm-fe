import { FarmStyled } from "components/styles/farmStyles";
import { ACTIONS } from "context/Actions";
import { DataContext } from "context/GlobalContext";
import { useCallback, useContext, useState } from "react";
import { Action, PlantOre, PLANTS, Square, TransactionPlant } from "types/Plant";
import Land from "./Land";

const Farm = () => {
  const context = useContext(DataContext)
  const dispatch = context?.dispatch

  const [land, setLand] = useState<Square[]>(
    Array(10).fill({
      plant: PlantOre.None,
      createdAt: 0,
    })
  );

  const onPlant = useCallback(async (landIndex: number) => {
    const price = PLANTS.find((item) => item.buyPrice);
    const now = Math.floor(Date.now() / 1000);
    if (dispatch !== undefined) {
      dispatch({ type: ACTIONS.TOOGLE_MODAL_SELECTPLANT });
    }
    // const transaction: TransactionPlant = {
    //   action: Action.Plant,
    //   plant: PlantOre.Corn,
    //   landIndex,
    //   createdAt: now,
    // };

    // setLand((oldLand) => {
    //   const newLand = oldLand.map((field, index) =>
    //     index === landIndex - 1 ? transaction : field
    //   );
    //   console.log("🚀 ~ file: Farm.tsx:30 ~ setLand ~ newLand:", newLand)
    //   return newLand;
    // });
  }, []);

  return (
    <FarmStyled>
      <Land
        onPlant={onPlant}
        land={land}
      />
    </FarmStyled>
  );
};

export default Farm;
