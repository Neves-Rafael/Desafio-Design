import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  p{
    font-family: "Poppins";
    font-weight: 600;
  }

  div{
    height: 4px;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.DARK_500};
  }
`