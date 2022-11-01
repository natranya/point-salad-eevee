import React from "react";
import styled from "styled-components";

interface Props {
  cardImage: string;
  clickHandler?: () => void;
  cardSelected?: boolean;
}
export function Card({ cardImage, clickHandler, cardSelected }: Props) {
  return (
    <CardLayout
      cardSelected={cardSelected}
      backgroundImage={cardImage}
      onClick={clickHandler}
    ></CardLayout>
  );
}

export const CardLayout = styled.div<{
  backgroundImage: string;
  cardSelected?: boolean;
}>`
  background: url("${(props) => props.backgroundImage}");
  background-repeat: no-repeat;
  background-size: cover;
  width: ${(props) => props.theme.card.width};
  height: ${(props) => props.theme.card.height};
  border-radius: ${(props) => props.theme.card.borderRadius};
  border: ${(props) =>
    props.cardSelected ? "4px solid #009FAE" : "4px solid transparent"};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
