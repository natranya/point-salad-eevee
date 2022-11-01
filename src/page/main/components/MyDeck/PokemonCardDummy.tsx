import React from "react";
import styled from "styled-components";
import { ICard } from "../../../../common/interface/card.interface";
import CardDummy from "../../../../components/CardDummy";

interface Props {
  cards: ICard[];
}
export default function PokemonCardDummy({ cards }: Props) {
  return (
    <PokemonCardDummyContainer
      cards={cards}
      cardSide={"POKEMON_SIDE"}
    ></PokemonCardDummyContainer>
  );
}

const PokemonCardDummyContainer = styled(CardDummy)``;
