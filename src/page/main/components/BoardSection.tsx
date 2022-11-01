import React from "react";
import styled from "styled-components";
import {
  IBoard,
  ISelectedBoardCardIndex,
} from "../../../common/interface/board.interface";
import { TCardSide } from "../../../common/interface/card.interface";
import Board from "./Board/Board";

interface Props {
  board: IBoard;
  clickBoardCard: (selectedSide: TCardSide, index: number) => void;
  selectedBoardCardIndex: ISelectedBoardCardIndex;
}
export default function BoardSection({
  board,
  clickBoardCard,
  selectedBoardCardIndex,
}: Props) {
  return (
    <BoardContainer>
      <Board
        board={board}
        clickBoardCard={clickBoardCard}
        selectedBoardCardIndex={selectedBoardCardIndex}
      ></Board>
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  display: grid;
`;
