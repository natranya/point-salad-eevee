import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { originCards } from "../../common/data/originCard.data";
import {
  IBoard,
  ISelectedBoardCardIndex,
} from "../../common/interface/board.interface";
import {
  ICard,
  TCardSide,
  TPokemonExceptEevee,
} from "../../common/interface/card.interface";
import { IDeck } from "../../common/interface/deck.interface";
import BoardSection from "./components/BoardSection";
import OpponentDeckAndMyDeckSection from "./components/OpponentDeckAndMyDeckSection";

export default function Main() {
  console.log("RENREDER!!");
  let rawCards: ICard[];
  const defaultUserDeck: IDeck = {
    pointSideCards: [],
    pokemonSide: {
      FLAREON: [],
      JOLTEON: [],
      VAPOREON: [],
      ESPEON: [],
      SYLVEON: [],
      UMBREON: [],
    },
  };
  const [selectedBoardCardIndex, setSelectedBoardCardIndex] =
    useState<ISelectedBoardCardIndex>({
      pointCardIndex: null,
      pokemonCardIndexs: [],
    });
  const [board, setBoard] = useState<IBoard>({
    pointCardDummies: [[], [], []],
    pokemonCards: [],
  });
  const [userDeck, setUserDeck] = useState<IDeck>(defaultUserDeck);
  const initGame = () => {
    getOriginCards();
    makeThreePointDummies();
  };
  const checkSelectAvailable = () => {
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
  };
  const moveSelectedCardToUserDeck = () => {
    if (selectedBoardCardIndex.pointCardIndex !== null) {
      const cardDummy =
        board.pointCardDummies[selectedBoardCardIndex.pointCardIndex];
      userDeck.pointSideCards.push(cardDummy[cardDummy.length - 1]);
      cardDummy.splice(-1, 1);
    } else if (selectedBoardCardIndex.pokemonCardIndexs.length !== 0) {
      selectedBoardCardIndex.pokemonCardIndexs.forEach((cardIndex) => {
        if (board.pokemonCards[cardIndex] !== null) {
          userDeck.pokemonSide[
            board.pokemonCards[cardIndex]!.pokemonSide
              .key as TPokemonExceptEevee
          ].push(board.pokemonCards[cardIndex]!);
        }
        board.pokemonCards[cardIndex] = null;
      });
    }
    selectedBoardCardIndex.pointCardIndex = null;
    selectedBoardCardIndex.pokemonCardIndexs = [];
  };
  const calculatePoint = () => {
    userDeck.pointSideCards.forEach((card) => {
      card.pointSide.calculatePoint(userDeck);
    });
  };

  const clickBoardCard = (selectedSide: TCardSide, index: number): void => {
    if (selectedSide === "POINT_SIDE") {
      selectedBoardCardIndex.pokemonCardIndexs = [];
      selectedBoardCardIndex.pointCardIndex =
        selectedBoardCardIndex.pointCardIndex === index ? null : index;
    } else if (selectedSide === "POKEMON_SIDE") {
      const findedIndex = selectedBoardCardIndex.pokemonCardIndexs.findIndex(
        (cardIndex) => cardIndex === index
      );
      if (findedIndex === -1) {
        if (selectedBoardCardIndex.pokemonCardIndexs.length < 2)
          selectedBoardCardIndex.pokemonCardIndexs.push(index);
      } else {
        selectedBoardCardIndex.pokemonCardIndexs.splice(findedIndex, 1);
      }
      selectedBoardCardIndex.pointCardIndex = null;
    }
    console.log(selectedBoardCardIndex);
    setSelectedBoardCardIndex({ ...selectedBoardCardIndex });
  };

  const selectCard = () => {
    if (checkSelectAvailable()) {
      moveSelectedCardToUserDeck();
      calculatePoint();
      fillEmptyPokemonCardOnBoard();
      setBoard({ ...board });
      setUserDeck({ ...userDeck });
    }
  };

  const getOriginCards = () => {
    let temp: ICard[] = [];
    for (let i = 0; i < 6; i++) {
      temp = temp.concat(originCards);
    }
    rawCards = [...temp];
  };
  const makeThreePointDummies = () => {
    if (rawCards && Array.isArray(rawCards) && rawCards.length !== 0) {
      const cardLength = rawCards.length;
      const mixCard = () => {
        const firstIndex = Math.floor(Math.random() * cardLength);
        const secondIndex = Math.floor(Math.random() * cardLength);
        const temp = rawCards[firstIndex];
        rawCards[firstIndex] = rawCards[secondIndex];
        rawCards[secondIndex] = temp;
      };
      for (let i = 0; i < 1000; i++) {
        mixCard();
      }
      const initCardLengthPerDummy = rawCards
        ? Math.floor(rawCards.length) / 3
        : 0;
      board.pointCardDummies[0] = [
        ...rawCards.slice(0, initCardLengthPerDummy),
      ];
      board.pointCardDummies[1] = [
        ...rawCards.slice(initCardLengthPerDummy, initCardLengthPerDummy * 2),
      ];
      board.pointCardDummies[2] = [
        ...rawCards.slice(initCardLengthPerDummy * 2),
      ];
    } else {
      board.pointCardDummies = [[], [], []];
    }
    setBoard(board);
  };

  const fillEmptyPokemonCardOnBoard = () => {
    const checkPointDummy = (index: number): boolean => {
      if (
        board.pointCardDummies[index] &&
        board.pointCardDummies[index].length > 0
      ) {
        return true;
      } else {
        return false;
      }
    };

    const getCardFromDummy = (index: number) => {
      const cardDummy = board.pointCardDummies[index % 3];
      board.pokemonCards[index] = cardDummy[cardDummy.length - 1];
      cardDummy.splice(-1, 1);
    };

    const fillDummyFromOtherDummy = (index: number) => {
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

    for (let i = 0; i < 6; i++) {
      if (!board.pokemonCards[i]) {
        if (checkPointDummy(i % 3)) {
          getCardFromDummy(i);
        } else {
          fillDummyFromOtherDummy(i % 3);
          if (checkPointDummy(i % 3)) {
            getCardFromDummy(i);
          }
        }
      }
    }

    setBoard({ ...board });
  };

  useEffect(() => {
    initGame();
    fillEmptyPokemonCardOnBoard();
  }, []);

  return (
    <MainContainer>
      <BoardSection
        board={board}
        clickBoardCard={clickBoardCard}
        selectedBoardCardIndex={selectedBoardCardIndex}
      ></BoardSection>
      {userDeck && (
        <OpponentDeckAndMyDeckSection
          userDeck={userDeck}
          selectCard={selectCard}
        ></OpponentDeckAndMyDeckSection>
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  min-width: 1366px;
  min-height: 720px;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 3fr;
`;
