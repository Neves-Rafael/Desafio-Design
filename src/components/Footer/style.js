import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({theme}) => theme.COLORS.DARK_500};

  img{
    margin: 4rem 0 4rem 0;
  }

  .footer-content{
    max-width: 110rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
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
  }

  div{
    display: flex;
    gap: 2rem;
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

    path{
      color: white
    }
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
`;

export const Address = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2.4rem 0 5rem 0;
  font-family: "Poppins";
  font-weight: 500;
  color: white
`;