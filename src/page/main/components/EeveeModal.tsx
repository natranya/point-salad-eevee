import React from "react";
import styled from "styled-components";
import Modal from "../../../components/Modal";

export default function EeveeModal() {
  return (
    <>
      <Modal>
        <Test>TEST</Test>
      </Modal>
    </>
  );
}

const Test = styled.div`
  background-color: white;
`;
