import React from "react";
import styled from "styled-components";
import CardCount from "../../../../components/CardCount";
import PointCard from "../../../../components/PointCard";

export default function PointCardList() {
  return (
    <PointCardListContainer>
      {[1, 2, 3].map((card) => {
        return (
          <PointCardWrapper>
            <PointCard></PointCard>
            <CardCount></CardCount>
          </PointCardWrapper>
        );
      })}
    </PointCardListContainer>
  );
}

const PointCardListContainer = styled.div`
  display: flex;
`;

const PointCardWrapper = styled.div`
  position: relative;
`;
