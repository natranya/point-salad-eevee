import React from "react";
import styled from "styled-components";
import { ICard } from "../../../../common/interface/card.interface";
import InfoSection from "./InfoSection";
import PointCardList from "./PointCardList";

interface Props {
  pointSideCards: ICard[];
  selectCard: () => void;
}

export default function PointCardAndInfoSection({
  pointSideCards,
  selectCard,
}: Props) {
  return (
    <PointCardAndInfoSectionContainer>
      <PointCardList cards={pointSideCards}></PointCardList>
      <InfoSection selectCard={selectCard}></InfoSection>
    </PointCardAndInfoSectionContainer>
  );
}

const PointCardAndInfoSectionContainer = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
`;
