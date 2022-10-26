import React from "react";
import styled from "styled-components";
import InfoSection from "./InfoSection";
import PointCardList from "./PointCardList";

export default function PointCardAndInfoSection() {
  return (
    <PointCardAndInfoSectionContainer>
      <PointCardList></PointCardList>
      <InfoSection></InfoSection>
    </PointCardAndInfoSectionContainer>
  );
}

const PointCardAndInfoSectionContainer = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
`;
