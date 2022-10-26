import React from "react";
import styled from "styled-components";
import { Card } from "./Card";
import CardCount from "./CardCount";

export default function CardDummy() {
  return (
    <CardDummyContainer>
      <Cards>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <CardWrapperForDummy key={item} order={index}>
              <Card></Card>
            </CardWrapperForDummy>
          );
        })}
      </Cards>
      <CardCount></CardCount>
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
