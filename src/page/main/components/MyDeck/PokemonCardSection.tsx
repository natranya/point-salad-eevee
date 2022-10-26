import React from "react";
import styled from "styled-components";
import CardCount from "../../../../components/CardCount";
import PokemonCardDummy from "./PokemonCardDummy";

export default function PokemonCardSection() {
  return (
    <PokemonCardSectionContainer>
      {[1, 2, 3, 4, 5, 6].map((cardDummy) => {
        return (
          <PokemonCardDummyWrapper>
            <PokemonCardDummy></PokemonCardDummy>
            <CardCount></CardCount>
          </PokemonCardDummyWrapper>
        );
      })}
    </PokemonCardSectionContainer>
  );
}

const PokemonCardDummyWrapper = styled.div`
  position: relative;
`;

const PokemonCardSectionContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 3%;
`;
