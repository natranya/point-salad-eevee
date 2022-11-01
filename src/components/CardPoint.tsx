import React from "react";
import styled from "styled-components";

interface Props {
  point: number;
}
export default function CardPoint({ point }: Props) {
  return <CardPointContainer>{point}</CardPointContainer>;
}

const CardPointContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c968a3;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  line-height: 32px;
`;
