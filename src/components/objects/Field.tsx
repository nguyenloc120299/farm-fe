import styled from "styled-components"
interface Props {
  onPlant: (landIndex: number) => void;
  landIndex:number;
}
const FieldStyled = styled.div`
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
    cursor: pointer;
    z-index: 9;
`
const VacantlandImg = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit:cover;
    transform: scale(1);
`
const Field: React.FC<Props> = ({ onPlant, landIndex }) => {
  return (
    <FieldStyled onClick={()=>onPlant(landIndex)}>
      <VacantlandImg src="/assets/images/land/soil/planted.png" />
    </FieldStyled>
  );
};

export default Field