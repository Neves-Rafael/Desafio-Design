import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NoticeFirst = styled.div`
  width: 100%;
  height: 48rem;
  background-color: ${({theme}) => theme.COLORS.WHITE};

  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 4rem;

  .notice-text{
    padding: 2.2rem;

    h2{
      font-size: 2rem;
      margin-bottom: 2.2rem;
    }

    p{
      display: none;

      @media(min-width: 768px){
        display: block;
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
    img{
      object-fit: cover;
      width: 100%;
      height: 22.4rem;
    }
  }
`;

export const NoticeSecond = styled.div`
  height: 42.6rem;
  background-color: ${({theme}) => theme.COLORS.WHITE};

  display: flex;
  margin-right: 4rem;

  .notice-text{
    width: 50%;
    padding: 2.2rem;

    h2{
      font-size: 3.2rem;
      margin-bottom: 2.2rem;
    }
  }

  .notice-image{
    width: 50%;

    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

export const NoticeThird = styled.div`
  width: 36rem;
  height: 42.6rem;
  background-color: ${({theme}) => theme.COLORS.WHITE};

  display: flex;
  flex-direction: column;

  .notice-text{
    padding: 2.2rem;

    h2{
      font-size: 2.2rem;
      margin-bottom: 2.2rem;
    }

    p{
      font-size: 1.4rem;
    }
  }

  .notice-image{
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;
