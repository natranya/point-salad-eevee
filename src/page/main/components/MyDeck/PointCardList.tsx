import React from "react";
import styled from "styled-components";
import { ICard } from "../../../../common/interface/card.interface";
import CardCount from "../../../../components/CardCount";
import CardPoint from "../../../../components/CardPoint";
import PointCard from "../../../../components/PointCard";

interface Props {
  cards: ICard[];
}

export default function PointCardList({ cards }: Props) {
  return (
    <PointCardListContainer>
      {cards &&
        cards.map((card) => {
          return (
            <PointCardWrapper>
              <PointCard card={card}></PointCard>
              <CardPoint point={card.pointSide.currentPoint || 0}></CardPoint>
            </PointCardWrapper>
          );
        })}
    </PointCardListContainer>
  );
}

const PointCardListContainer = styled.div`
  display: flex;
`;

const PointCardWrapper = styled.div`
  position: relative;
`;
