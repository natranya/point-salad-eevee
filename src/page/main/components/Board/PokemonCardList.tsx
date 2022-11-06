import React from "react";
import styled from "styled-components";
import {
  IBlankCard,
  ICard,
  TCardSide,
} from "../../../../common/interface/card.interface";
import { BlankCard } from "../../../../components/BlankCard";
import PokemonCard from "../../../../components/PokemonCard";

interface Props {
  pokemonCards: (ICard | IBlankCard)[];
  clickBoardCard: (selectedSide: TCardSide, index: number) => void;
  selectedPokemonCardIndexs: number[];
}

export default function PokemonCardList({
  pokemonCards,
  clickBoardCard,
  selectedPokemonCardIndexs,
}: Props) {
  const clickBoardPokemonCard = (index: number) => {
    clickBoardCard("POKEMON_SIDE", index);
  };
  return (
    <PokemonCardListContainer>
      {pokemonCards &&
        pokemonCards.map((card, index) => {
          return "cardKey" in card ? (
            <PokemonCard
              card={card}
              clickBoardPokemonCard={() => {
                clickBoardPokemonCard(index);
              }}
              cardSelected={selectedPokemonCardIndexs.includes(index)}
            ></PokemonCard>
          ) : (
            <BlankCard></BlankCard>
          );
        })}
    </PokemonCardListContainer>
  );
}

const PokemonCardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;
