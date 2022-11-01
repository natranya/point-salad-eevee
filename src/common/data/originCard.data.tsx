import { ICard } from "../interface/card.interface";
import { IDeck } from "../interface/deck.interface";
import { pokemonSide } from "./pokemonSide.data";

export const originCards: ICard[] = [
  {
    cardKey: 1,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_1.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint = myDeck.pokemonSide.ESPEON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 2,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_2.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.SYLVEON.length,
            myDeck.pokemonSide.JOLTEON.length
          ) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 3,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_3.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.ESPEON.length + myDeck.pokemonSide.VAPOREON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 4,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_1.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.FLAREON.length,
            myDeck.pokemonSide.SYLVEON.length
          ) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 5,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_2.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.VAPOREON.length * 3 -
          myDeck.pokemonSide.SYLVEON.length -
          myDeck.pokemonSide.JOLTEON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 6,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_3.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint = myDeck.pokemonSide.VAPOREON.length =
          myDeck.pokemonSide.UMBREON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 7,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_1.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint = myDeck.pokemonSide.JOLTEON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 8,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_2.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.FLAREON.length,
            myDeck.pokemonSide.JOLTEON.length,
            myDeck.pokemonSide.VAPOREON.length
          ) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 9,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_3.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.JOLTEON.length * 3 -
          myDeck.pokemonSide.ESPEON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 10,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_1.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.UMBREON.length,
            myDeck.pokemonSide.JOLTEON.length
          ) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 11,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_2.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.VAPOREON.length,
            myDeck.pokemonSide.SYLVEON.length,
            myDeck.pokemonSide.FLAREON.length
          ) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 12,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_3.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.FLAREON.length +
          myDeck.pokemonSide.VAPOREON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 13,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_1.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.SYLVEON.length + myDeck.pokemonSide.FLAREON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 14,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_2.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.FLAREON.length,
            myDeck.pokemonSide.JOLTEON.length,
            myDeck.pokemonSide.VAPOREON.length,
            myDeck.pokemonSide.ESPEON.length,
            myDeck.pokemonSide.UMBREON.length,
            myDeck.pokemonSide.SYLVEON.length
          ) * 12;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 15,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_3.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.SYLVEON.length * 3 -
          myDeck.pokemonSide.JOLTEON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 16,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_1.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.UMBREON.length * 2 +
          myDeck.pokemonSide.FLAREON.length * 2 -
          myDeck.pokemonSide.SYLVEON.length * 4;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 17,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_2.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.UMBREON.length + myDeck.pokemonSide.FLAREON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 18,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_3.jpg",
      calculatePoint: function (myDeck: IDeck, otherDeck?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.UMBREON.length * 2 +
          myDeck.pokemonSide.FLAREON.length -
          myDeck.pokemonSide.SYLVEON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
];
