import React from "react";
import styled from "styled-components";
import PointCardDummy from "./PointCardDummy";

export default function PointCardSection() {
  return (
    <PointCardSectionContainer>
      <PointCardDummy></PointCardDummy>
      <PointCardDummy></PointCardDummy>
      <PointCardDummy></PointCardDummy>
    </PointCardSectionContainer>
  );
}

const PointCardSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin-bottom: 40px;
`;
