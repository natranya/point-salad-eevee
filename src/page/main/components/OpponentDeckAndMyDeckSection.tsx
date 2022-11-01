import React from "react";
import styled from "styled-components";
import MyDeck from "./MyDeck/MyDeck";
import OpponentDeck from "./OpponentDeck/OpponentDeck";
import { IDeck } from "../../../common/interface/deck.interface";

interface Props {
  userDeck: IDeck;
  selectCard: () => void;
}

export default function OpponentDeckAndMyDeckSection({
  userDeck,
  selectCard,
}: Props) {
  return (
    <OpponentDeckAndMyDeckSectionContainer>
      <OpponentDeck></OpponentDeck>
      <OpponentDeck></OpponentDeck>
      <OpponentDeck></OpponentDeck>
      <OpponentDeck></OpponentDeck>
      <MyDeckContainer>
        <MyDeck deck={userDeck} selectCard={selectCard}></MyDeck>
      </MyDeckContainer>
    </OpponentDeckAndMyDeckSectionContainer>
  );
}

const OpponentDeckAndMyDeckSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2fr 2fr 4fr;
`;

const MyDeckContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;
