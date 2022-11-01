import React from "react";
import styled from "styled-components";
import {
  IBoard,
  ISelectedBoardCardIndex,
} from "../../../../common/interface/board.interface";
import { TCardSide } from "../../../../common/interface/card.interface";
import PointCardSection from "./PointCardSection";
import PokemonCardList from "./PokemonCardList";

interface Props {
  board: IBoard;
  clickBoardCard: (selectedSide: TCardSide, index: number) => void;
  selectedBoardCardIndex: ISelectedBoardCardIndex;
}
export default function Board({
  board,
  clickBoardCard,
  selectedBoardCardIndex,
}: Props) {
  return (
    <BoardContainer>
      <PointCardSection
        clickBoardCard={clickBoardCard}
        pointCardDummies={board.pointCardDummies}
        selectedPointCardIndex={selectedBoardCardIndex.pointCardIndex}
      ></PointCardSection>
      <PokemonCardList
        pokemonCards={board.pokemonCards}
        clickBoardCard={clickBoardCard}
        selectedPokemonCardIndexs={selectedBoardCardIndex.pokemonCardIndexs}
      ></PokemonCardList>
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  background-color: #ebb480;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
