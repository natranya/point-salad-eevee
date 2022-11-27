import React from "react";
import styled from "styled-components";
import { TPokemonExceptEevee } from "../../../../common/interface/card.interface";
import { TDeckPokemonSide } from "../../../../common/interface/deck.interface";
import { BlankCard } from "../../../../components/BlankCard";
import CardCount from "../../../../components/CardCount";
import PokemonCardDummy from "./PokemonCardDummy";

interface Props {
  pokemonSide: TDeckPokemonSide;
}
export default function PokemonCardSection({ pokemonSide }: Props) {
  return (
    <PokemonCardSectionContainer>
      {pokemonSide &&
        (Object.keys(pokemonSide) as TPokemonExceptEevee[]).map(
          (tPokemon, index) => {
            return pokemonSide[tPokemon] &&
              pokemonSide[tPokemon].length !== 0 ? (
              <PokemonCardDummyWrapper key={index}>
                <PokemonCardDummy
                  cards={pokemonSide[tPokemon]}
                ></PokemonCardDummy>
                <CardCount
                  count={
                    pokemonSide[tPokemon] ? pokemonSide[tPokemon].length : 0
                  }
                ></CardCount>
              </PokemonCardDummyWrapper>
            ) : (
              <BlankCard key={index}></BlankCard>
            );
          }
        )}
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
