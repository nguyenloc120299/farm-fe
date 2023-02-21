import styled from "styled-components"

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
    transform: scale(.7);
`
const Field = () => {
    return (
        <FieldStyled>
            <VacantlandImg src="/assets/images/land/farm-area.png" />
        </FieldStyled>
    )
}

export default Field