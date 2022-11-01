import { ICard } from "./card.interface";

export interface IBoard {
  pointCardDummies: ICard[][];
  pokemonCards: (ICard | null)[];
}

export interface ISelectedBoardCardIndex {
  pointCardIndex: number | null;
  pokemonCardIndexs: number[];
}
