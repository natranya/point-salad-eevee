import { ICard, POKEMON_EXCEPT_EEVEE } from "../interface/card.interface";
import { originCards } from "../../common/data/originCard.data";
import { IBoard } from "../interface/board.interface";
import { TPokemonExceptEevee } from "../interface/card.interface";

export const GameUtil = {
  makeRawCards: (): ICard[] => {
    // 인원수당 랜덤으로 카드 받아와서 리턴해주는 형태로 변경
    const USER_COUNT = 1;
    const POKEMON_CARD_COUNT_PER_TYPE = 18;
    const makeRandomCardIndexs = () => {
      const SELECT_CARD_COUNT_PER_TYPE = USER_COUNT * 3;
      const cardIndexs = new Set<number>();
      while (true) {
        const randomIndex: number = Math.floor(
          Math.random() * POKEMON_CARD_COUNT_PER_TYPE
        );
        cardIndexs.add(randomIndex);
        if (cardIndexs.size === SELECT_CARD_COUNT_PER_TYPE) {
          break;
        }
      }
      return cardIndexs;
    };
    const pokemonTypes: string[] = [...POKEMON_EXCEPT_EEVEE];

    let makedRawCards: ICard[] = [];
    pokemonTypes.forEach((pokemonType, index) => {
      const makedRandomIndexs = makeRandomCardIndexs();
      makedRandomIndexs.forEach((value: number) => {
        makedRawCards.push(
          originCards[value + POKEMON_CARD_COUNT_PER_TYPE * index]
        );
      });
    });
    console.log(makedRawCards);
    return [...makedRawCards];
  },
  makeThreePointDummies: (rawCards: ICard[]): ICard[][] => {
    const _rawCards = [...rawCards];
    let pointCardDummies = [];
    if (rawCards && Array.isArray(_rawCards) && _rawCards.length !== 0) {
      const cardLength = _rawCards.length;
      const mixCard = () => {
        const firstIndex = Math.floor(Math.random() * cardLength);
        const secondIndex = Math.floor(Math.random() * cardLength);
        const temp = _rawCards[firstIndex];
        _rawCards[firstIndex] = _rawCards[secondIndex];
        _rawCards[secondIndex] = temp;
      };
      for (let i = 0; i < 1000; i++) {
        mixCard();
      }
      const initCardLengthPerDummy = _rawCards
        ? Math.floor(_rawCards.length) / 3
        : 0;

      pointCardDummies.push([..._rawCards.slice(0, initCardLengthPerDummy)]);
      pointCardDummies.push([
        ..._rawCards.slice(initCardLengthPerDummy, initCardLengthPerDummy * 2),
      ]);
      pointCardDummies.push([..._rawCards.slice(initCardLengthPerDummy * 2)]);
    } else {
      pointCardDummies = [[], [], []];
    }
    return pointCardDummies;
  },
  fillEmptyPokemonCardOnBoard: (board: IBoard): IBoard => {
    const _board = {
      pointCardDummies: [...board.pointCardDummies.map((item) => [...item])],
      pokemonCards: [...board.pokemonCards],
    };
    console.log(_board.pokemonCards);
    for (let i = 0; i < 6; i++) {
      if (!_board.pokemonCards[i] || !("cardKey" in _board.pokemonCards[i])) {
        if (checkPointDummy(_board, i % 3)) {
          getCardFromDummy(_board, i);
        } else {
          fillDummyFromOtherDummy(_board, i % 3);
          if (checkPointDummy(_board, i % 3)) {
            getCardFromDummy(_board, i);
          }
        }
      }
    }
    return _board;
  },
};

const checkPointDummy = (board: IBoard, index: number): boolean => {
  if (
    board.pointCardDummies[index] &&
    board.pointCardDummies[index].length > 0
  ) {
    return true;
  } else {
    return false;
  }
};

const getCardFromDummy = (board: IBoard, index: number) => {
  const cardDummy = board.pointCardDummies[index % 3];
  board.pokemonCards[index] = cardDummy[cardDummy.length - 1];
  cardDummy.splice(-1, 1);
};

const fillDummyFromOtherDummy = (board: IBoard, index: number) => {
  let dummyIndexForFill = -1;
  let maxCardLength = 0;
  board.pointCardDummies.forEach((dummy, dummyIndex) => {
    if (
      dummyIndex !== index &&
      dummy.length > maxCardLength &&
      dummy.length > 1
    ) {
      dummyIndexForFill = dummyIndex;
      maxCardLength = dummy.length;
    }
  });
  if (dummyIndexForFill !== -1) {
    board.pointCardDummies[index] = board.pointCardDummies[
      dummyIndexForFill
    ].slice(0, Math.ceil(maxCardLength / 2));
    board.pointCardDummies[dummyIndexForFill] = board.pointCardDummies[
      dummyIndexForFill
    ].slice(Math.ceil(maxCardLength / 2));
  }
};
