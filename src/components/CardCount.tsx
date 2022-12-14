import React from "react";
import styled from "styled-components";

interface Props {
  count: number;
}
export default function CardCount({ count }: Props) {
  return <CardCountContainer>{count}</CardCountContainer>;
}

const CardCountContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9c77d6;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  line-height: 32px;
`;
