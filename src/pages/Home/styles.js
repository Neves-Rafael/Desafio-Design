import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  main{
    margin: 6rem 2rem ;
    max-width: 120rem;

    @media(min-width: 768px){
      margin: 4rem
    }

    @media(min-width: 1240px){
      margin: 8rem auto;
    }
  }
`;