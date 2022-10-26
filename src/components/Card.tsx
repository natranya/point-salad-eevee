import React from "react";
import styled from "styled-components";

export function Card() {
  return <CardLayout>Card</CardLayout>;
}

export const CardLayout = styled.div`
  background-color: white;
  width: ${(props) => props.theme.card.width};
  height: ${(props) => props.theme.card.height};
  border-radius: ${(props) => props.theme.card.borderRadius};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
