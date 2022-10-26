import React from "react";
import styled from "styled-components";
import Board from "./Board/Board";
import MyDeck from "./MyDeck/MyDeck";

export default function BoardSection() {
  return (
    <BoardContainer>
      <Board></Board>
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  display: grid;
`;
