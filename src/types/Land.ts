import { PlantItem } from "./Plant";

const landEmpty = "/assets/images/crops.png";
export enum LandLevel {
  level1 = 1,
  level2 = 2,
}

export interface LandItem {
  id: number;
  rowGrid?: number;
  colGrid?: number;
  img?: string;
  plant?:PlantItem;
  createdAt?:number | 0
}

export const LANDS: LandItem[] = [
  {
    id: 1,
    colGrid: 2,
    rowGrid: 4,
    img: landEmpty,
  },
  {
    id: 2,
    colGrid: 3,
    rowGrid: 4,
    img: landEmpty,
  },
  {
    id: 3,
    colGrid: 4,
    rowGrid: 4,
    img: landEmpty,
  },
  {
    id: 4,
    colGrid: 2,
    rowGrid: 5,
    img: landEmpty,
  },
  {
    id: 5,
    colGrid: 3,
    rowGrid: 5,
    img: landEmpty,
  },
  {
    id: 6,
    colGrid: 4,
    rowGrid: 5,
    img: landEmpty,
  },
  {
    id: 7,
    colGrid: 10,
    rowGrid: 4,
    img: landEmpty,
  },
  {
    id: 8,
    colGrid: 11,
    rowGrid: 4,
    img: landEmpty,
  },
  {
    id: 9,
    colGrid: 12,
    rowGrid: 4,
    img: landEmpty,
  },
  {
    id: 10,
    colGrid: 10,
    rowGrid: 5,
    img: landEmpty,
  },
  {
    id: 11,
    colGrid: 11,
    rowGrid: 5,
    img: landEmpty,
  },
  {
    id: 12,
    colGrid: 12,
    rowGrid: 5,
    img: landEmpty,
  },

  {
    id: 13,
    colGrid: 2,
    rowGrid: 6,
    img: landEmpty,
  },
  {
    id: 14,
    colGrid: 3,
    rowGrid: 6,
    img: landEmpty,
  },
  {
    id: 15,
    colGrid: 4,
    rowGrid: 6,
    img: landEmpty,
  },
  {
    id: 16,
    colGrid: 2,
    rowGrid: 7,
    img: landEmpty,
  },
  {
    id: 17,
    colGrid: 3,
    rowGrid: 7,
    img: landEmpty,
  },
  {
    id: 18,
    colGrid: 4,
    rowGrid: 7,
    img: landEmpty,
  },
  {
    id: 19,
    colGrid: 10,
    rowGrid: 6,
    img: landEmpty,
  },
  {
    id: 20,
    colGrid: 11,
    rowGrid: 6,
    img: landEmpty,
  },
  {
    id: 21,
    colGrid: 12,
    rowGrid: 6,
    img: landEmpty,
  },
  {
    id: 22,
    colGrid: 10,
    rowGrid: 7,
    img: landEmpty,
  },
  {
    id: 23,
    colGrid: 11,
    rowGrid: 7,
    img: landEmpty,
  },
  {
    id: 24,
    colGrid: 12,
    rowGrid: 7,
    img: landEmpty,
  },
];
