import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 18rem;
  height: 3rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;

&:focus-within {
    outline: 2px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  svg {
    margin: 0 0 0 1rem;
  }

  input {
    font-family: "Poppins";
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    height: 100%;
    padding-left: 1rem;
    background: none;
    outline: none;
    
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

`