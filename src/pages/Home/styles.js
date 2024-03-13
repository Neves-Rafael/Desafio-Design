import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;

  .teste{
    background-color: red;
    margin: 4rem 2rem ;
    max-width: 120rem;

    @media(min-width: 768px){
      margin: 4rem
    }

    @media(min-width: 1240px){
      margin: 4rem auto;
    }
  }
`;