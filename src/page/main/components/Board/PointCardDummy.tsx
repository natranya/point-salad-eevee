import React from "react";
import styled from "styled-components";
import { ICard, TCardSide } from "../../../../common/interface/card.interface";
import CardDummy from "../../../../components/CardDummy";

interface Props {
  cards: ICard[];
  clickPointCardDummy: () => void;
  cardSelected: boolean;
}
export default function PointCardDummy({
  cards,
  clickPointCardDummy,
  cardSelected,
}: Props) {
  return (
    <PointCardDummyContainer
      cards={cards}
      cardSide="POINT_SIDE"
      clickCardDummy={clickPointCardDummy}
      cardSelected={cardSelected}
    ></PointCardDummyContainer>
  );
}

const PointCardDummyContainer = styled(CardDummy)``;
