import React from "react";
import { ICard } from "../common/interface/card.interface";
import { Card } from "./Card";

interface Props {
  card: ICard;
  clickBoardPokemonCard: () => void;
  cardSelected: boolean;
}
export default function PokemonCard({
  card,
  clickBoardPokemonCard,
  cardSelected,
}: Props) {
  const clickHandler = () => {
    clickBoardPokemonCard();
  };
  return (
    <>
      <Card
        cardImage={card.pokemonSide.pokemonSideImage}
        clickHandler={clickHandler}
        cardSelected={cardSelected}
      ></Card>
    </>
  );
}
