import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  
  @media(min-width: 768px){
    flex-wrap: wrap;
  }

  .notice-row{
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media(min-width: 1024px){
      flex-direction: row-reverse;
  }
}
`;

export const NoticeFirst = styled.div`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  margin-top: 4rem;

  .notice-text{
    padding: 1rem;

    h2{
      font-size: 2.4rem;
      
      @media(min-width: 768px){
        font-size: 2.4rem;
      }
    }
  }

  .notice-image img{
      object-fit: cover;
      width: 100%;
      height: 22rem;
    }
`;

export const NoticeSecond = styled.div`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column-reverse;

  @media(min-width: 1024px){
    max-width: 80rem;
  }

  .notice-text{
    padding: 1rem;
    flex: 1;
    display: flex;
    align-items: center;

    h2{
      font-size: 2.4rem;
    }

    p{
      display: none;

      @media(min-width: 768px){
        display: block;
      }
    }
  }

  .notice-image img{
      object-fit: cover;
      width: 100%;
      height: 24rem;
    }
`;

export const NoticeThird = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.WHITE};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(min-width: 1024px){
    max-width: 36rem;
  }

  .notice-text{
    padding: 1rem;

    h2{
      font-size: 2.4rem;

      @media(min-width: 1024px){
        font-size: 2rem;
      }
    }

    p{
      font-size: 1.4rem;
      display: none;
      @media(min-width: 1024px){
        display: block;
      }
    }
  }

  .notice-image img{
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  
`;
