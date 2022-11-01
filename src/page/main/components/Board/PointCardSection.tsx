import React from "react";
import styled from "styled-components";
import { ICard, TCardSide } from "../../../../common/interface/card.interface";
import PointCardDummy from "./PointCardDummy";

interface Props {
  pointCardDummies: ICard[][];
  clickBoardCard: (selectedSide: TCardSide, index: number) => void;
  selectedPointCardIndex: number | null;
}
export default function PointCardSection({
  pointCardDummies,
  clickBoardCard,
  selectedPointCardIndex,
}: Props) {
  const clickPointCardDummy = (index: number) => {
    clickBoardCard("POINT_SIDE", index);
  };
  return (
    <PointCardSectionContainer>
      {pointCardDummies &&
        pointCardDummies.map((pointCardDummy, index) => {
          return (
            <PointCardDummy
              cards={pointCardDummy}
              clickPointCardDummy={() => {
                clickPointCardDummy(index);
              }}
              cardSelected={selectedPointCardIndex === index ? true : false}
            ></PointCardDummy>
          );
        })}
    </PointCardSectionContainer>
  );
}

const PointCardSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin-bottom: 40px;
`;
