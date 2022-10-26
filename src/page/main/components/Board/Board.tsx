import React from "react";
import styled from "styled-components";
import PointCardSection from "./PointCardSection";
import PokemonCardList from "./PokemonCardList";

export default function Board() {
  return (
    <BoardContainer>
      <PointCardSection></PointCardSection>
      <PokemonCardList></PokemonCardList>
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
