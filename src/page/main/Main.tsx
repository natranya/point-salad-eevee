import React from "react";
import styled from "styled-components";
import BoardSection from "./components/BoardSection";
import OpponentDeckAndMyDeckSection from "./components/OpponentDeckAndMyDeckSection";

export default function Main() {
  return (
    <MainContainer>
      <BoardSection></BoardSection>
      <OpponentDeckAndMyDeckSection></OpponentDeckAndMyDeckSection>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  min-width: 1366px;
  min-height: 720px;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 3fr;
`;
