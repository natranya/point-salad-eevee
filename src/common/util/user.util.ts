import { BlankCard } from "../../components/BlankCard";
import { IBoard, ISelectedBoardCardIndex } from "../interface/board.interface";
import {
  ICard,
  TCardSide,
  TPokemonExceptEevee,
} from "../interface/card.interface";
import { IDeck } from "../interface/deck.interface";
import { GameUtil } from "./game.util";

export const UserUtil = {
  clickBoardCard: (
    selectedSide: TCardSide,
    selectedBoardCardIndex: ISelectedBoardCardIndex,
    clickIndex: number
  ): ISelectedBoardCardIndex => {
    // 함수 외부의 데이터를 건드리지않도록 분리하기 위하여 직접 데이터 복사
    const _selectedBoardCardIndex: ISelectedBoardCardIndex = {
      pointCardIndex: selectedBoardCardIndex.pointCardIndex,
      pokemonCardIndexs: [...selectedBoardCardIndex.pokemonCardIndexs],
    };

    // 내부 함수도 데이터 분리를 진행해야 할까?
    // 데이터 복사를 하는 이유: 순수함수, 불변성 => 내부함수는 순수함수를 지키지 않아도 된다는 규칙 필요.
    if (selectedSide === "POINT_SIDE") {
      clickBoardPointCard(_selectedBoardCardIndex, clickIndex);
    } else if (selectedSide === "POKEMON_SIDE") {
      clickBoardPokemonCard(_selectedBoardCardIndex, clickIndex);
    }
    return _selectedBoardCardIndex;
  },
  checkCardSelectAvailable: (
    selectedBoardCardIndex: ISelectedBoardCardIndex
  ): boolean => {
    if (
      selectedBoardCardIndex.pointCardIndex !== null ||
      selectedBoardCardIndex.pokemonCardIndexs.length === 2
    ) {
      return true;
    } else {
      return false;
    }
    // TODO: 남은 장수가 부족한 경우
    // TODO: 종료 조건 체크
  },
  selectCard: (
    board: IBoard,
    userDeck: IDeck,
    selectedCardIndex: ISelectedBoardCardIndex
  ): [IBoard, IDeck, ISelectedBoardCardIndex] => {
    const _board: IBoard = {
      pointCardDummies: [...board.pointCardDummies.map((item) => [...item])],
      pokemonCards: [...board.pokemonCards],
    };
    const _userDeck: IDeck = {
      pointSideCards: [...userDeck.pointSideCards],
      pokemonSide: userDeck.pokemonSide,
    };
    const _selectedCardIndex: ISelectedBoardCardIndex = {
      pointCardIndex: selectedCardIndex.pointCardIndex,
      pokemonCardIndexs: [...selectedCardIndex.pokemonCardIndexs],
    };
    moveSelectedCardToUserDeck(_board, _userDeck, _selectedCardIndex);
    calculatePoint(_userDeck);
    return [_board, _userDeck, _selectedCardIndex];
  },
};

const clickBoardPointCard = (
  selectedBoardCardIndex: ISelectedBoardCardIndex,
  clickIndex: number
): ISelectedBoardCardIndex => {
  selectedBoardCardIndex = resetBoardPokemonCardIndexs(selectedBoardCardIndex);
  selectedBoardCardIndex = changeBoardPointCardIndex(
    selectedBoardCardIndex,
    clickIndex
  );
  return selectedBoardCardIndex;
};

const clickBoardPokemonCard = (
  selectedBoardCardIndex: ISelectedBoardCardIndex,
  clickIndex: number
): ISelectedBoardCardIndex => {
  selectedBoardCardIndex = resetBoardPoIntCardIndex(selectedBoardCardIndex);
  selectedBoardCardIndex = changeBoardPokemonCardIndex(
    selectedBoardCardIndex,
    clickIndex
  );
  return selectedBoardCardIndex;
};

const resetBoardPokemonCardIndexs = (
  selectedBoardCardIndex: ISelectedBoardCardIndex
): ISelectedBoardCardIndex => {
  selectedBoardCardIndex.pokemonCardIndexs = [];
  return selectedBoardCardIndex;
};
const resetBoardPoIntCardIndex = (
  selectedBoardCardIndex: ISelectedBoardCardIndex
): ISelectedBoardCardIndex => {
  selectedBoardCardIndex.pointCardIndex = null;
  return selectedBoardCardIndex;
};

const changeBoardPointCardIndex = (
  selectedBoardCardIndex: ISelectedBoardCardIndex,
  clickIndex: number
): ISelectedBoardCardIndex => {
  selectedBoardCardIndex.pointCardIndex =
    selectedBoardCardIndex.pointCardIndex === clickIndex ? null : clickIndex;
  return selectedBoardCardIndex;
};

const changeBoardPokemonCardIndex = (
  selectedBoardCardIndex: ISelectedBoardCardIndex,
  clickIndex: number
): ISelectedBoardCardIndex => {
  const findedIndex = selectedBoardCardIndex.pokemonCardIndexs.findIndex(
    (cardIndex) => cardIndex === clickIndex
  );
  if (findedIndex === -1) {
    if (selectedBoardCardIndex.pokemonCardIndexs.length < 2)
      selectedBoardCardIndex.pokemonCardIndexs.push(clickIndex);
  } else {
    selectedBoardCardIndex.pokemonCardIndexs.splice(findedIndex, 1);
  }
  return selectedBoardCardIndex;
};

/**
 *
 * @param board
 * @param userDeck
 * @param selectedBoardCardIndex
 *
 * @return isEeveeSelected
 */
const moveSelectedCardToUserDeck = (
  board: IBoard,
  userDeck: IDeck,
  selectedBoardCardIndex: ISelectedBoardCardIndex
): boolean => {
  let isEeveeSelected = false;
  if (selectedBoardCardIndex.pointCardIndex !== null) {
    const cardDummy =
      board.pointCardDummies[selectedBoardCardIndex.pointCardIndex];
    if (cardDummy[cardDummy.length - 1].pokemonSide.key === "EEVEE") {
      isEeveeSelected = true;
    } else {
      userDeck.pointSideCards.push(cardDummy[cardDummy.length - 1]);
    }
    cardDummy.splice(-1, 1);
  } else if (selectedBoardCardIndex.pokemonCardIndexs.length !== 0) {
    selectedBoardCardIndex.pokemonCardIndexs.forEach((cardIndex) => {
      if ("cardKey" in board.pokemonCards[cardIndex]) {
        if (
          (board.pokemonCards[cardIndex] as ICard).pokemonSide.key === "EEVEE"
        ) {
          isEeveeSelected = true;
        } else {
          userDeck.pokemonSide[
            (board.pokemonCards[cardIndex] as ICard).pokemonSide
              .key as TPokemonExceptEevee
          ].push(board.pokemonCards[cardIndex] as ICard);
        }
      }
      board.pokemonCards[cardIndex] = {} as typeof BlankCard;
    });
  }
  selectedBoardCardIndex.pointCardIndex = null;
  selectedBoardCardIndex.pokemonCardIndexs = [];
  return isEeveeSelected;
};

const calculatePoint = (userDeck: IDeck) => {
  userDeck.pointSideCards.forEach((card) => {
    card.pointSide.calculatePoint(userDeck);
  });
};
