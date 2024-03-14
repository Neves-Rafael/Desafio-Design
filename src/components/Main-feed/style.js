import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  @media(min-width: 768px){
    flex-wrap: wrap;
  }

  .notice-row{
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media(min-width: 1024px){
      flex-direction: row;
  }
}
`;

export const NoticeFirst = styled.div`
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.WHITE};

  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 4rem;

  @media(min-width: 768px){
    flex-direction: row;
  }

  .notice-text{
    padding: 2.2rem;

    @media(min-width: 768px){
      width: 50%;
    }

    h2{
      font-size: 2.4rem;
      
      @media(min-width: 768px){
        margin-bottom: 2rem;
      }
    }

    p{
      display: none;

      @media(min-width: 768px){
        display: block;
        font-size: 1.2rem;
      }

      @media(min-width: 1024px){
        font-size: 1.6rem;
      }
    }

    p + p{  
      &::before{
        content: "";
        height: 2px;
        width: 100%;
        display: block;
        background-color: gray;
        margin: 2rem 0;
      }
    }
  }

  .notice-image{ 
    @media(min-width: 768px){
      width: 50%;
    }

    img{
      object-fit: cover;
      width: 100%;
      height: 22rem;

      @media(min-width: 768px){
        height: 100%;
      }
    }
  }
`;

export const NoticeSecond = styled.div`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column-reverse;


  @media(min-width: 768px){
    flex-direction: row;
  }

  @media(min-width: 1024px){
    max-width: 80rem;
  }

  .notice-text{
    padding: 2.2rem;

    @media(min-width: 768px){
      width: 50%;
    }

    h2{
    font-size: 2.4rem;

      @media(min-width: 768px){
        margin-bottom: 2.2rem;
      }
    }

    p{
      display: none;

      @media(min-width: 768px){
        display: block;
      }
    }
  }

  .notice-image{
    width: 100%;

    @media(min-width: 768px){
      width: 50%;
    }

    img{
      object-fit: cover;
      width: 100%;
      height: 22rem;
      
      @media(min-width: 768px){
        height: 100%;
      }
    }
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
        font-size: 2.2rem;
        margin-bottom: 1rem;
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

  .notice-image{
    flex: 1;
    
    img{
      object-fit: cover;
      width: 100%;
      height: 22rem;
      
      @media(min-width: 1024px){
        width: 36rem;
        height: 20rem;
      }
    }
  }
`;
