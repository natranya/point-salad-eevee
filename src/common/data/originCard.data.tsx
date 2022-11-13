import { ICard } from "../interface/card.interface";
import { IDeck } from "../interface/deck.interface";
import { pokemonSide } from "./pokemonSide.data";

export const originCards: ICard[] = [
  {
    cardKey: 1,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_1.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = otherDecks?.every(
          (otherDeck) =>
            myDeck.pokemonSide.ESPEON.length >=
            otherDeck.pokemonSide.ESPEON.length
        )
          ? 10
          : 0;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 2,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_2.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = otherDecks?.every(
          (otherDeck) =>
            myDeck.pokemonSide.ESPEON.length <=
            otherDeck.pokemonSide.ESPEON.length
        )
          ? 7
          : 0;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 3,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_3.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = myDeck.pokemonSide.ESPEON.length % 2 === 0 ? 7 : 3;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 4,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_4.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        let overThreePokemon = 0;
        myDeck.pokemonSide.FLAREON.length >= 3 && overThreePokemon++;
        myDeck.pokemonSide.VAPOREON.length >= 3 && overThreePokemon++;
        myDeck.pokemonSide.JOLTEON.length >= 3 && overThreePokemon++;
        myDeck.pokemonSide.ESPEON.length >= 3 && overThreePokemon++;
        myDeck.pokemonSide.UMBREON.length >= 3 && overThreePokemon++;
        myDeck.pokemonSide.SYLVEON.length >= 3 && overThreePokemon++;
        this.currentPoint = overThreePokemon * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 5,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_5.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.ESPEON.length * 4 -
          myDeck.pokemonSide.JOLTEON.length * 2 -
          myDeck.pokemonSide.SYLVEON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 6,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_6.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.ESPEON.length * 2 +
          myDeck.pokemonSide.VAPOREON.length -
          myDeck.pokemonSide.FLAREON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 7,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_7.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.ESPEON.length * 3 -
          myDeck.pokemonSide.UMBREON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 8,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_8.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.ESPEON.length * 3 -
          myDeck.pokemonSide.VAPOREON.length -
          myDeck.pokemonSide.FLAREON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 9,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_9.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.ESPEON.length,
            myDeck.pokemonSide.JOLTEON.length,
            myDeck.pokemonSide.UMBREON.length
          ) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 10,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_10.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.ESPEON.length + myDeck.pokemonSide.JOLTEON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 11,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_11.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.floor(myDeck.pokemonSide.ESPEON.length / 3) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 12,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_12.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.ESPEON.length * 2 +
          myDeck.pokemonSide.UMBREON.length * 2 -
          myDeck.pokemonSide.VAPOREON.length * 4;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 13,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_13.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.ESPEON.length,
            myDeck.pokemonSide.FLAREON.length,
            myDeck.pokemonSide.SYLVEON.length
          ) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 14,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_14.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.floor(myDeck.pokemonSide.ESPEON.length / 2) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 15,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_15.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = myDeck.pokemonSide.ESPEON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 16,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_16.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
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
    cardKey: 17,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_17.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.ESPEON.length + myDeck.pokemonSide.VAPOREON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 18,
    pointSide: {
      pointSideImage: "/image/pointSide/flareon_point_18.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.UMBREON.length,
            myDeck.pokemonSide.VAPOREON.length
          ) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.FLAREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 19,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_1.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = otherDecks?.every(
          (otherDeck) =>
            myDeck.pokemonSide.JOLTEON.length >=
            otherDeck.pokemonSide.JOLTEON.length
        )
          ? 10
          : 0;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 20,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_2.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = myDeck.pokemonSide.JOLTEON.length % 2 === 0 ? 7 : 3;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 21,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_3.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.JOLTEON.length,
            myDeck.pokemonSide.SYLVEON.length,
            myDeck.pokemonSide.ESPEON.length
          ) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 22,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_4.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = otherDecks?.every(
          (otherDeck) =>
            myDeck.pokemonSide.JOLTEON.length <=
            otherDeck.pokemonSide.JOLTEON.length
        )
          ? 7
          : 0;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 23,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_5.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.FLAREON.length,
            myDeck.pokemonSide.UMBREON.length
          ) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 24,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_6.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.JOLTEON.length,
            myDeck.pokemonSide.VAPOREON.length,
            myDeck.pokemonSide.FLAREON.length
          ) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 25,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_7.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.floor(myDeck.pokemonSide.JOLTEON.length / 3) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 26,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_8.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.JOLTEON.length * 2 +
          myDeck.pokemonSide.ESPEON.length * 2 -
          myDeck.pokemonSide.UMBREON.length * 4;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 27,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_9.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.JOLTEON.length + myDeck.pokemonSide.UMBREON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 28,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_10.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.JOLTEON.length * 3 -
          myDeck.pokemonSide.UMBREON.length -
          myDeck.pokemonSide.VAPOREON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 29,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_11.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.JOLTEON.length * 4 -
          myDeck.pokemonSide.SYLVEON.length * 2 -
          myDeck.pokemonSide.FLAREON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 30,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_12.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
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
    cardKey: 31,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_13.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        const getAllCardLength = (deck: IDeck) => {
          return (
            deck.pokemonSide.FLAREON.length +
            deck.pokemonSide.VAPOREON.length +
            deck.pokemonSide.JOLTEON.length +
            deck.pokemonSide.ESPEON.length +
            deck.pokemonSide.UMBREON.length +
            deck.pokemonSide.SYLVEON.length
          );
        };
        const myCardLength = getAllCardLength(myDeck);
        this.currentPoint = otherDecks?.every(
          (otherDeck) => getAllCardLength(otherDeck) >= myCardLength
        )
          ? 7
          : 0;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 32,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_14.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = myDeck.pokemonSide.JOLTEON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 33,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_15.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.floor(myDeck.pokemonSide.JOLTEON.length / 2) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 34,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_16.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.JOLTEON.length * 2 +
          myDeck.pokemonSide.UMBREON.length -
          myDeck.pokemonSide.VAPOREON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 35,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_17.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.ESPEON.length,
            myDeck.pokemonSide.SYLVEON.length
          ) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 36,
    pointSide: {
      pointSideImage: "/image/pointSide/vaporeon_point_18.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.JOLTEON.length + myDeck.pokemonSide.SYLVEON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.VAPOREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 37,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_1.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
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
    cardKey: 38,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_2.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.VAPOREON.length,
            myDeck.pokemonSide.JOLTEON.length,
            myDeck.pokemonSide.ESPEON.length
          ) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 39,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_3.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.floor(myDeck.pokemonSide.VAPOREON.length / 2) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 40,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_4.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.floor(myDeck.pokemonSide.VAPOREON.length / 3) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 41,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_5.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = myDeck.pokemonSide.VAPOREON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 42,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_6.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = otherDecks?.every(
          (otherDeck) =>
            myDeck.pokemonSide.VAPOREON.length >=
            otherDeck.pokemonSide.VAPOREON.length
        )
          ? 10
          : 0;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 43,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_7.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.VAPOREON.length * 2 +
          myDeck.pokemonSide.FLAREON.length * 2 -
          myDeck.pokemonSide.SYLVEON.length * 4;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 44,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_8.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.VAPOREON.length * 3 -
          myDeck.pokemonSide.FLAREON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 45,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_9.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.VAPOREON.length,
            myDeck.pokemonSide.UMBREON.length,
            myDeck.pokemonSide.FLAREON.length
          ) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 46,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_10.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.VAPOREON.length +
          myDeck.pokemonSide.UMBREON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 47,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_11.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
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
    cardKey: 48,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_12.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.VAPOREON.length % 2 === 0 ? 7 : 3;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 49,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_13.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.VAPOREON.length * 2 +
          myDeck.pokemonSide.SYLVEON.length -
          myDeck.pokemonSide.JOLTEON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 50,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_14.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        const getAllCardLength = (deck: IDeck) => {
          return (
            deck.pokemonSide.FLAREON.length +
            deck.pokemonSide.VAPOREON.length +
            deck.pokemonSide.JOLTEON.length +
            deck.pokemonSide.ESPEON.length +
            deck.pokemonSide.UMBREON.length +
            deck.pokemonSide.SYLVEON.length
          );
        };
        const myCardLength = getAllCardLength(myDeck);
        this.currentPoint = otherDecks?.every(
          (otherDeck) => getAllCardLength(otherDeck) <= myCardLength
        )
          ? 10
          : 0;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 51,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_15.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = otherDecks?.every(
          (otherDeck) =>
            otherDeck.pokemonSide.VAPOREON.length >=
            myDeck.pokemonSide.VAPOREON.length
        )
          ? 7
          : 0;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 52,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_16.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.VAPOREON.length * 4 -
          myDeck.pokemonSide.UMBREON.length * 2 -
          myDeck.pokemonSide.ESPEON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 53,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_17.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.ESPEON.length,
            myDeck.pokemonSide.UMBREON.length
          ) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 54,
    pointSide: {
      pointSideImage: "/image/pointSide/jolteon_point_18.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.VAPOREON.length +
          myDeck.pokemonSide.SYLVEON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.JOLTEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 55,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_1.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = myDeck.pokemonSide.FLAREON.length % 2 === 0 ? 7 : 3;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 56,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_2.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.FLAREON.length,
            myDeck.pokemonSide.ESPEON.length,
            myDeck.pokemonSide.UMBREON.length
          ) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 57,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_3.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.FLAREON.length * 4 -
          myDeck.pokemonSide.VAPOREON.length * 2 -
          myDeck.pokemonSide.UMBREON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 58,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_4.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.FLAREON.length * 3 -
          myDeck.pokemonSide.SYLVEON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 59,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_5.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.FLAREON.length,
            myDeck.pokemonSide.VAPOREON.length,
            myDeck.pokemonSide.SYLVEON.length
          ) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 60,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_6.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = otherDecks?.every(
          (otherDeck) =>
            otherDeck.pokemonSide.FLAREON.length >=
            myDeck.pokemonSide.FLAREON.length
        )
          ? 7
          : 0;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 61,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_7.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.floor(myDeck.pokemonSide.FLAREON.length / 3) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 62,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_8.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
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
    cardKey: 63,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_9.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.VAPOREON.length,
            myDeck.pokemonSide.SYLVEON.length
          ) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 64,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_10.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.FLAREON.length * 2 +
          myDeck.pokemonSide.SYLVEON.length * 2 -
          myDeck.pokemonSide.JOLTEON.length * 4;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 65,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_11.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.FLAREON.length + myDeck.pokemonSide.JOLTEON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 66,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_12.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        let emptyPokemonCount = 0;
        myDeck.pokemonSide.FLAREON.length === 0 && emptyPokemonCount++;
        myDeck.pokemonSide.VAPOREON.length === 0 && emptyPokemonCount++;
        myDeck.pokemonSide.JOLTEON.length === 0 && emptyPokemonCount++;
        myDeck.pokemonSide.ESPEON.length === 0 && emptyPokemonCount++;
        myDeck.pokemonSide.UMBREON.length === 0 && emptyPokemonCount++;
        myDeck.pokemonSide.SYLVEON.length === 0 && emptyPokemonCount++;
        this.currentPoint = emptyPokemonCount * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 67,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_13.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.FLAREON.length * 3 -
          myDeck.pokemonSide.JOLTEON.length -
          myDeck.pokemonSide.ESPEON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 68,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_14.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.FLAREON.length * 2 +
          myDeck.pokemonSide.JOLTEON.length -
          myDeck.pokemonSide.ESPEON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 69,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_15.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
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
    cardKey: 70,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_16.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.floor(myDeck.pokemonSide.FLAREON.length / 2) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 71,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_17.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = myDeck.pokemonSide.FLAREON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 72,
    pointSide: {
      pointSideImage: "/image/pointSide/espeon_point_18.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = otherDecks?.every(
          (otherDeck) =>
            otherDeck.pokemonSide.FLAREON.length <=
            myDeck.pokemonSide.FLAREON.length
        )
          ? 10
          : 0;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.ESPEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 73,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_1.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = otherDecks?.every(
          (otherDeck) =>
            otherDeck.pokemonSide.SYLVEON.length <=
            myDeck.pokemonSide.SYLVEON.length
        )
          ? 10
          : 0;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 74,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_2.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.SYLVEON.length,
            myDeck.pokemonSide.FLAREON.length,
            myDeck.pokemonSide.JOLTEON.length
          ) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 75,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_3.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.FLAREON.length,
            myDeck.pokemonSide.VAPOREON.length
          ) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 76,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_4.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.SYLVEON.length,
            myDeck.pokemonSide.UMBREON.length,
            myDeck.pokemonSide.VAPOREON.length
          ) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 77,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_5.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = myDeck.pokemonSide.SYLVEON.length % 2 === 0 ? 7 : 3;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 78,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_6.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.SYLVEON.length * 3 -
          myDeck.pokemonSide.ESPEON.length -
          myDeck.pokemonSide.UMBREON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 79,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_7.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = otherDecks?.every(
          (otherDeck) =>
            otherDeck.pokemonSide.SYLVEON.length >=
            myDeck.pokemonSide.SYLVEON.length
        )
          ? 7
          : 0;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 80,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_8.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.floor(myDeck.pokemonSide.SYLVEON.length / 2) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 81,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_9.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.SYLVEON.length - myDeck.pokemonSide.ESPEON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 82,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_10.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.SYLVEON.length * 4 -
          myDeck.pokemonSide.FLAREON.length * 2 -
          myDeck.pokemonSide.VAPOREON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 83,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_11.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.SYLVEON.length * 2 +
          myDeck.pokemonSide.JOLTEON.length * 2 -
          myDeck.pokemonSide.ESPEON.length * 4;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 84,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_12.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.FLAREON.length,
            myDeck.pokemonSide.VAPOREON.length,
            myDeck.pokemonSide.JOLTEON.length,
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
    cardKey: 85,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_13.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.SYLVEON.length + myDeck.pokemonSide.FLAREON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 86,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_14.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.SYLVEON.length * 2 +
          myDeck.pokemonSide.JOLTEON.length -
          myDeck.pokemonSide.ESPEON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 87,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_15.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.ESPEON.length,
            myDeck.pokemonSide.JOLTEON.length
          ) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 88,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_16.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = myDeck.pokemonSide.SYLVEON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 89,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_17.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.floor(myDeck.pokemonSide.SYLVEON.length / 3) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.UMBREON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 90,
    pointSide: {
      pointSideImage: "/image/pointSide/umbreon_point_18.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
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
    cardKey: 91,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_1.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.floor(myDeck.pokemonSide.UMBREON.length / 2) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 92,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_2.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.UMBREON.length * 3 -
          myDeck.pokemonSide.FLAREON.length -
          myDeck.pokemonSide.SYLVEON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 93,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_3.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.UMBREON.length + myDeck.pokemonSide.ESPEON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 94,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_4.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.UMBREON.length + myDeck.pokemonSide.FLAREON.length;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 95,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_5.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = myDeck.pokemonSide.UMBREON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 96,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_6.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = myDeck.pokemonSide.UMBREON.length % 2 === 0 ? 7 : 3;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 97,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_7.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.ESPEON.length,
            myDeck.pokemonSide.VAPOREON.length
          ) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 98,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_8.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
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
  {
    cardKey: 99,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_9.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.floor(myDeck.pokemonSide.UMBREON.length / 3) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 100,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_10.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        let overTwoPokemon = 0;
        myDeck.pokemonSide.FLAREON.length >= 2 && overTwoPokemon++;
        myDeck.pokemonSide.VAPOREON.length >= 2 && overTwoPokemon++;
        myDeck.pokemonSide.JOLTEON.length >= 2 && overTwoPokemon++;
        myDeck.pokemonSide.ESPEON.length >= 2 && overTwoPokemon++;
        myDeck.pokemonSide.UMBREON.length >= 2 && overTwoPokemon++;
        myDeck.pokemonSide.SYLVEON.length >= 2 && overTwoPokemon++;
        this.currentPoint = overTwoPokemon * 3;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 101,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_11.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = otherDecks?.every(
          (otherDeck) =>
            otherDeck.pokemonSide.UMBREON.length <=
            myDeck.pokemonSide.UMBREON.length
        )
          ? 10
          : 0;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 102,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_12.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.UMBREON.length * 3 -
          myDeck.pokemonSide.VAPOREON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 103,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_13.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint = otherDecks?.every(
          (otherDeck) =>
            otherDeck.pokemonSide.UMBREON.length >=
            myDeck.pokemonSide.UMBREON.length
        )
          ? 7
          : 0;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 104,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_14.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.UMBREON.length,
            myDeck.pokemonSide.ESPEON.length,
            myDeck.pokemonSide.VAPOREON.length
          ) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 105,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_15.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          myDeck.pokemonSide.UMBREON.length * 4 -
          myDeck.pokemonSide.ESPEON.length * 2 -
          myDeck.pokemonSide.JOLTEON.length * 2;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 106,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_16.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
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
    cardKey: 107,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_17.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.UMBREON.length,
            myDeck.pokemonSide.SYLVEON.length,
            myDeck.pokemonSide.JOLTEON.length
          ) * 8;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
  {
    cardKey: 108,
    pointSide: {
      pointSideImage: "/image/pointSide/sylveon_point_18.png",
      calculatePoint: function (myDeck: IDeck, otherDecks?: IDeck[]) {
        this.currentPoint =
          Math.min(
            myDeck.pokemonSide.FLAREON.length,
            myDeck.pokemonSide.JOLTEON.length
          ) * 5;
      },
      currentPoint: 0,
    },
    pokemonSide: pokemonSide.SYLVEON,
    currentSide: "POINT_SIDE",
  },
];
