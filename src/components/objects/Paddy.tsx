import React from 'react'
import { PlantItem, StagePlant } from 'types/Plant'
type PropsType={
    plantItem: PlantItem,
    plantStage:StagePlant
}
const Paddy : React.FC<PropsType> = ({plantItem,plantStage}) => {
  return (
    <div>Paddy</div>
  )
}

export default Paddy