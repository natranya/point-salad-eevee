import { ICard, TPokemonExceptEevee } from "./card.interface";

export interface IDeckPointSide {
  cards: ICard[];
}

export type TDeckPokemonSide = {
  [key in TPokemonExceptEevee]: ICard[];
};

export interface IDeck {
  pointSideCards: ICard[];
  pokemonSide: TDeckPokemonSide;
}
