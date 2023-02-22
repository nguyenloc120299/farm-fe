import { DivStyled } from "dapp/styles";
import React from "react";
import styled from "styled-components";
const MarkStyled = styled(DivStyled)`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  cursor: pointer;
  z-index: 9;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
    transform: scale(.8);
  }
`;
const Mark = () => {
  return( 
  <MarkStyled>
     <img src="/assets/images/ui/assets/mark.png"/>
  </MarkStyled>
  )
};

export default Mark;
