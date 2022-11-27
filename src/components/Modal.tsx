import React, { useState } from "react";
import styled from "styled-components";

export default function Modal(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  return <ModalContainer>{props.children}</ModalContainer>;
}

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50vw;
  height: 50vh;
  background-color: black;
  transform: translate(-50%, -50%);
`;
