import { IDeck } from "./deck.interface";

export const POKEMON_EXCEPT_EEVEE = [
  "FLAREON",
  "JOLTEON",
  "VAPOREON",
  "ESPEON",
  "UMBREON",
  "SYLVEON",
] as const;
type TPokemonExceptEeveeTuple = typeof POKEMON_EXCEPT_EEVEE;
export type TCardSide = "POINT_SIDE" | "POKEMON_SIDE";
export type TPokemonExceptEevee = TPokemonExceptEeveeTuple[number];

export type TPokemon = TPokemonExceptEevee | "EEVEE";

export interface IPokemonSide {
  key: TPokemon;
  name: string;
  pokemonSideImage: string;
}

export type TPokemonSideData = {
  [key in TPokemon]: IPokemonSide;
};

export interface IPointSide {
  pointSideImage: string;
  calculatePoint: (myDeck: IDeck, otherDeck?: IDeck[]) => void;
  currentPoint?: number;
}

export interface ICard {
  cardKey: number;
  pointSide: IPointSide;
  pokemonSide: IPokemonSide;
  currentSide: TCardSide;
}

export interface IBlankCard {}
