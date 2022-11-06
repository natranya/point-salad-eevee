import { IDeck } from "./deck.interface";

export type TCardSide = "POINT_SIDE" | "POKEMON_SIDE";

export type TPokemonExceptEevee =
  | "FLAREON"
  | "JOLTEON"
  | "VAPOREON"
  | "ESPEON"
  | "UMBREON"
  | "SYLVEON";

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
