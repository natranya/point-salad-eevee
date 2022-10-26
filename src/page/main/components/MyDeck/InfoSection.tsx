import React from "react";
import styled from "styled-components";

export default function InfoSection() {
  return (
    <InfoSectionContainer>
      <Point>POINT</Point>
      <ActionButton>선택 완료</ActionButton>
    </InfoSectionContainer>
  );
}

const InfoSectionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  && > * {
    flex-basis: 0;
    flex-grow: 1;
  }
`;

const Point = styled.div``;
const ActionButton = styled.button``;
