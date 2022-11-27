import React from "react";
import styled from "styled-components";
import { ICard } from "../../../../common/interface/card.interface";

interface Props {
  pointSideCards: ICard[];
  selectCard: () => void;
}

export default function InfoSection({ pointSideCards, selectCard }: Props) {
  const totalPoint = pointSideCards.reduce((acc, curr) => {
    return acc + (curr.pointSide.currentPoint || 0);
  }, 0);
  return (
    <InfoSectionContainer>
      <Point>POINT {totalPoint}</Point>
      <ActionButton onClick={selectCard}>선택 완료</ActionButton>
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

const Point = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
const ActionButton = styled.button``;
