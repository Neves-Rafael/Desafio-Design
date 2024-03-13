import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({theme}) => theme.COLORS.DARK_500};

  img:nth-child(1){
    margin: 4rem 0 4rem 0;
    width: 20rem;

    @media(max-width: 768px){
      display: none;
    }
  }

  .footer-content{
    max-width: 110rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    >div:nth-child(2){
      height: 4rem;
      width: 28rem;
      gap: 1.2rem;
      background-color: ${({theme}) => theme.COLORS.GRAY};
      margin: 4rem 0;

      color: ${({theme}) => theme.COLORS.DARK_900};
      
      input{
        padding-left: 0;
        font-weight: 600;

        &::placeholder{
          color: ${({theme}) => theme.COLORS.DARK_900};
        }
      }

      @media(min-width: 425px){
        width: 40rem;
      }

      @media(min-width: 768px){
        display: none;
      }
    }
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 2rem;
  
  a{
    font-family: "Poppins";
    font-weight: 600;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  .senado-logo{
    margin: 2rem 0 0 0;
    width: 20rem; 

    @media(min-width: 768px){
    display: none;
    }
  }

  @media(max-width: 768px){
    flex-direction: column;
    text-align: center;
  }
`;

export const Social = styled.div`
  display: flex;
  margin: 6rem 0 2rem 0;
  height: 10rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid white;
  border-bottom: 2px solid white;

  >div:nth-child(1){
    height: 4rem;
    width: 34rem;
    gap: 1.2rem;
    background-color: ${({theme}) => theme.COLORS.GRAY};
    color: ${({theme}) => theme.COLORS.DARK_900};
    
    input{
      padding-left: 0;
      font-weight: 600;

      &::placeholder{
        color: ${({theme}) => theme.COLORS.DARK_900};
      }
    }

    @media(max-width: 768px){
        display: none;
    }
  }

  p{
    font-family: "Poppins";
    font-weight: 600;
    font-size: 1.6rem;
    color: white
  }

  .icon-social{
    display: flex;
    gap: 1.4rem;
    margin-top: 1rem;

    path{
      color: white
    }
  }

  @media(max-width: 768px){
    flex-direction: column;
    border: none;
    margin: 4rem 0 0 0;
  }
`;

export const InfoContact = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div:first-child{
    display: flex;
    gap: 2rem;

    a{
      font-weight: 400;

      @media(max-width: 768px){
        font-size: 1.4rem;
        margin-bottom: 2rem;
      }
    }
  }

  div:last-child{
    display: flex;
    align-items: center;
    gap: 1rem;

    path{
      color: white
    }
  }

  a{
    color: white;
    font-family: "Poppins";
    font-weight: 500;
  }

  @media(max-width: 768px){
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
`;

export const Address = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2.4rem 0 5rem 0;
  font-weight: 500;
  color: white;
  
  p{
    font-family: "Poppins";
    font-size: 1.4rem;
  }

  @media(max-width: 1024px){
    flex-direction: column;
    text-align: center;
    padding: 0 2rem;
    gap: 2rem;
  }
`;