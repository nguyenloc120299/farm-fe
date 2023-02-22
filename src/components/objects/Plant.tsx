import React from "react";
import { PlantItem, StagePlant } from "types/Plant";

type PlantPropsTypes = {
  plantItem?: PlantItem;
  children?: React.ReactElement
};
const Plant: React.FC<PlantPropsTypes> = ({ plantItem ,children}) => {

  return <div>
    {
      children
    }
  </div>;
};

export default Plant;
