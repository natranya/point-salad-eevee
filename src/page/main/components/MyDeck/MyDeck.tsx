import React from "react";
import styled from "styled-components";
import PointCardAndInfoSection from "./PointCardAndInfoSection";
import PokemonCardSection from "./PokemonCardSection";

export default function MyDeck() {
  return (
    <MyDeckContainer>
      <PointCardAndInfoSection></PointCardAndInfoSection>
      <PokemonCardSection></PokemonCardSection>
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
  background-color: skyblue;
`;
