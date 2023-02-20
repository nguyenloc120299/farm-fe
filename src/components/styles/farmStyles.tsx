import styled from "styled-components";

export const Area = styled.div`
  
  position: relative;
  
`
export const FarmStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  grid-auto-rows: 1fr;
  max-width: 1200px;
  max-height: 80vh;
  width: 100%;
  margin: auto;
  margin-top: 10px;
  overflow-y: clip;
  position: relative;

`