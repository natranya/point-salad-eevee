import React from "react";
import styled from "styled-components";
import PokemonCard from "../../../../components/PokemonCard";

export default function PokemonCardList() {
  return (
    <PokemonCardListContainer>
      <PokemonCard></PokemonCard>
      <PokemonCard></PokemonCard>
      <PokemonCard></PokemonCard>
      <PokemonCard></PokemonCard>
      <PokemonCard></PokemonCard>
      <PokemonCard></PokemonCard>
    </PokemonCardListContainer>
  );
}

const PokemonCardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;
