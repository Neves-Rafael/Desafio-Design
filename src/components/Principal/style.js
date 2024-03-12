import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const NoticeFirst = styled.div`
  width: 100%;
  height: 48rem;
  background-color: ${({theme}) => theme.COLORS.WHITE};

  display: flex;
  margin-bottom: 4rem;

  .notice-text{
    width: 50%;
    padding: 2.2rem;

    h2{
      font-size: 3.2rem;
      margin-bottom: 2.2rem;
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
    width: 50%;

    img{
      object-fit: cover;
      width: 100%;
      height: 48rem;
    }
  }
`;

export const NoticeSecond = styled.div`
  width: 80rem;
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
