export type TCardSide = "POINT_SIDE" | "POKEMON_SIDE";

export type TPokemon =
  | "FLAREON"
  | "JOLTEON"
  | "VAPOREON"
  | "ESPEON"
  | "UMBREON"
  | "SYLVEON"
  | "EEVEE";

export interface IPokemonSide {
  name: string;
  pokemonSideImage: string;
}

export type TPokemonSideData = {
  [key in TPokemon]: IPokemonSide;
};

export interface IPointSide {
  pointSideImage: string;
  calculatePoint: () => number;
  currentPoint?: number;
}

export interface ICard {
  cardKey: number;
  pointSide: IPointSide;
  pokemonSide: IPokemonSide;
  currentSide: TCardSide;
}
