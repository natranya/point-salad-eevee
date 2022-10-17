import React from "react";
import BoardAndMyDeckSection from "./components/BoardAndMyDeckSection";
import OpponentDeckList from "./components/OpponentDeckList";

export default function Main() {
  return (
    <div>
      <BoardAndMyDeckSection></BoardAndMyDeckSection>
      <OpponentDeckList></OpponentDeckList>
    </div>
  );
}
