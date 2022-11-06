import { IBlankCard, ICard } from "./card.interface";

export interface IBoard {
  pointCardDummies: ICard[][];
  pokemonCards: (ICard | IBlankCard)[];
}

export interface ISelectedBoardCardIndex {
  pointCardIndex: number | null;
  pokemonCardIndexs: number[];
}
