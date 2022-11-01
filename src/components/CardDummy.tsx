import React from "react";
import styled from "styled-components";
import { ICard, TCardSide } from "../common/interface/card.interface";
import { Card } from "./Card";
import CardCount from "./CardCount";

interface Props {
  cards: ICard[];
  cardSide: TCardSide;
  clickCardDummy?: () => void;
  cardSelected?: boolean;
}
export default function CardDummy({
  cards,
  cardSide,
  clickCardDummy,
  cardSelected,
}: Props) {
  return (
    <CardDummyContainer
      onClick={() => {
        if (clickCardDummy) {
          clickCardDummy();
        }
      }}
    >
      <Cards>
        {cards &&
          cards.map((card, index) => {
            return (
              <CardWrapperForDummy key={index} order={index}>
                {cardSide === "POINT_SIDE" && (
                  <Card
                    cardImage={card.pointSide.pointSideImage}
                    cardSelected={cardSelected}
                  ></Card>
                )}
                {cardSide === "POKEMON_SIDE" && (
                  <Card
                    cardImage={card.pokemonSide.pokemonSideImage}
                    cardSelected={cardSelected}
                  ></Card>
                )}
              </CardWrapperForDummy>
            );
          })}
      </Cards>
    </CardDummyContainer>
  );
}

const CardDummyContainer = styled.div`
  position: relative;
  width: ${(props) => props.theme.card.width};
  height: ${(props) => props.theme.card.height};
`;

const Cards = styled.div`
  & > * {
    position: absolute;
  }
`;

const CardWrapperForDummy = styled.div<{ order?: number }>`
  top: -${(props) => (props.order ? props.order * 2 : 0)}px;
`;
