import React from "react";
import styled from "styled-components";

export function BlankCard() {
  return <BlankCardLayout></BlankCardLayout>;
}

const BlankCardLayout = styled.div<{}>`
  width: ${(props) => props.theme.card.width};
  height: ${(props) => props.theme.card.height};
  border-radius: ${(props) => props.theme.card.borderRadius};
  border: 2px solid black;
`;
