export enum PlantOre {
  None = "0",
  Paddy = "1",
  Corn = "2",
}
export enum Action {
  Plant = 0,
  Harvest = 1,
}
export enum STAGE {
  Stage1 = "1",
  Stage2 = "2",
  Stage3 = "3",
}
export interface Square {
  plant: PlantOre;
  createdAt: number;
}
export interface TransactionPlant {
  plant: PlantOre;
  createdAt: number;
  action: Action;
  landIndex: number;
}
export interface PlantItem {
  plant: PlantOre;
  name: string;
  image: string;
  buyPrice: number;
  sellPrice: number;
  landRequired: number;
  harvestMinutes: number;
}

export interface StagePlant {
  plant: PlantOre;
  name: string;
  image: string;
  stage: STAGE;
}

export const PLANTS: PlantItem[] = [
  {
    plant: PlantOre.Paddy,
    name: "Paddy Plant",
    image: "/assets/images/plant/carot_avt.png",
    buyPrice: 0.02,
    sellPrice: 0.032,
    landRequired: 1,
    harvestMinutes: 5,
  },
  {
    plant: PlantOre.Corn,
    name: "Corn plant",
    image: "/assets/images/plant/corn_avt.png",
    buyPrice: 0.12,
    sellPrice: 0.24,
    landRequired: 1,
    harvestMinutes: 60,
  },
];
