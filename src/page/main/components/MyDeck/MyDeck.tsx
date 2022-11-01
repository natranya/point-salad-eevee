import React from "react";
import styled from "styled-components";
import { IDeck } from "../../../../common/interface/deck.interface";
import PointCardAndInfoSection from "./PointCardAndInfoSection";
import PokemonCardSection from "./PokemonCardSection";

interface Props {
  deck: IDeck;
  selectCard: () => void;
}
export default function MyDeck({ deck, selectCard }: Props) {
  return (
    <MyDeckContainer>
      <PointCardAndInfoSection
        pointSideCards={deck.pointSideCards}
        selectCard={selectCard}
      ></PointCardAndInfoSection>
      <PokemonCardSection pokemonSide={deck.pokemonSide}></PokemonCardSection>
    </MyDeckContainer>
  );
}

const MyDeckContainer = styled.div`
  display: grid;
  box-sizing: border-box;
  gap: 5%;
  padding: 3%;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  background-color: #ffebcd;
`;
