import { ICard } from "../interface/card.interface";
import { pokemonSide } from "./pokemonSide.data";

export const originCard: ICard[] = [
  {
    cardKey: 1,
    pointSide: {
      pointSideImage: "",
      calculatePoint: () => {
        return 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
];
