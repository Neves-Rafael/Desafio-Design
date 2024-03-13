import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
`;

export const HeaderTop = styled.div`
  background-color: ${({theme}) => theme.COLORS.PRIMARY_700};
  display: flex;
  justify-content: center;

  #top-content{
    width: 120rem;
    justify-content: space-between;
    display: flex;
    align-items: center;
    height: 3rem;
  }

  .languages{
    display: flex;
    gap: 2.6rem;

    a{
      font-size: 1.2rem;
      font-weight: 700;
      font-family: "Poppins";
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }

  .accessibility{
    display: flex;
    align-items: center;

    p, a{
      font-family: "Poppins";
    }

    p{
      color: ${({theme}) => theme.COLORS.WHITE};
      font-size: 1.2rem;
      font-weight: 600;
      margin-right: 4rem;
    }

    a{
      color: ${({theme}) => theme.COLORS.WHITE};
      font-weight: 500;
      margin-left: 1rem;
    }

    path{
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }

  @media(max-width: 768px){
    display: none;
  }
`;

export const HeaderMiddle = styled.div`
  background-color: ${({theme}) => theme.COLORS.PRIMARY_100};
  display: flex;
  justify-content: center;

  #middle-content{
    width: 120rem;
    height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .Menu{
    display: flex;
    align-items: center;
    gap: 1rem;

    path{
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    p{
      font-family: "Poppins";
      font-weight: 600;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }

  img:nth-child(2){
    width: 35rem;
  }

  img:nth-child(1){
    width: 18rem;
  }

  .search img{
    margin-bottom: 1rem;
  }

  @media(max-width: 768px){
    display: none;
  }
`;

export const HeaderBottom = styled.div`
  background-color: ${({theme}) => theme.COLORS.PRIMARY_700};
  color: ${({theme}) => theme.COLORS.WHITE};
  height: 3rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7.2rem;
  font-weight: 500;

  @media(max-width: 768px){
    display: none;
  }
`;

export const HeaderMobile = styled.div`
  background-color: ${({theme}) => theme.COLORS.PRIMARY_700};
  align-items: center;
  justify-content: space-around;
  height: 6rem;

  display: none;

  img{
    height: 2.8rem;
  }

  path{
    color: white;
  }

  @media(max-width: 768px){
    display: flex;
  }
`;