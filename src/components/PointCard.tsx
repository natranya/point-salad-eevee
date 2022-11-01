import React from "react";
import { ICard } from "../common/interface/card.interface";
import { Card } from "./Card";

interface Props {
  card: ICard;
}
export default function PointCard({ card }: Props) {
  return (
    <>
      <Card cardImage={card.pointSide.pointSideImage}></Card>
    </>
  );
}
