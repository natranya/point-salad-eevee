import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  IBoard,
  ISelectedBoardCardIndex,
} from "../../common/interface/board.interface";
import { TCardSide } from "../../common/interface/card.interface";
import { IDeck } from "../../common/interface/deck.interface";
import { GameUtil } from "../../common/util/game.util";
import { UserUtil } from "../../common/util/user.util";
import BoardSection from "./components/BoardSection";
import OpponentDeckAndMyDeckSection from "./components/OpponentDeckAndMyDeckSection";

export default function Main() {
  console.log("RENREDER!!");
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
    const rawCards = GameUtil.makeRawCards();
    board.pointCardDummies = GameUtil.makeThreePointDummies(rawCards);
  };

  const clickBoardCard = (
    selectedSide: TCardSide,
    clickIndex: number
  ): void => {
    const newselectedBoardCardIndex = UserUtil.clickBoardCard(
      selectedSide,
      selectedBoardCardIndex,
      clickIndex
    );
    setSelectedBoardCardIndex({ ...newselectedBoardCardIndex });
  };

  const selectCard = () => {
    if (UserUtil.checkCardSelectAvailable(selectedBoardCardIndex)) {
      const [newBoard, newUserDeck, newSelectedBoardCardIndex] =
        UserUtil.selectCard(board, userDeck, selectedBoardCardIndex);
      const pokemonCardFilledBoard =
        GameUtil.fillEmptyPokemonCardOnBoard(newBoard);
      const pointCardFilledBoard = GameUtil.fillEmptyPointDummyFromOtherDummy(
        pokemonCardFilledBoard
      );
      setSelectedBoardCardIndex({ ...newSelectedBoardCardIndex });
      setBoard({ ...pointCardFilledBoard });
      setUserDeck({ ...newUserDeck });
    }
  };

  useEffect(() => {
    initGame();
    const newBoard = GameUtil.fillEmptyPokemonCardOnBoard(board);
    setBoard({ ...newBoard });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
