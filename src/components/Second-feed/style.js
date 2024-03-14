import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  display: flex;

  @media(min-width: 768px){
      flex-direction: row;
  }

  .notice-row{
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media(min-width: 768px){
      max-width: 36rem;
      margin-left: 4rem;
    }
  }
`;

export const NoticeFirst = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  display: flex;
  position: relative;
  height: 40rem;
  margin-bottom: 4rem;

  @media(min-width: 768px){
    height: auto;
    margin-bottom: 0;
  }

  .notice-text{
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 2.2rem;

    h2{
      font-size: 2.4rem;
      color:white;

      @media(min-width: 768px){
        font-size: 3.2rem;
        padding: 4rem 2.2rem 4rem 2.2rem;
      }
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

export const NoticeSecond = styled.div`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column;

  .notice-text{
    padding: 1rem;

    h2{
    font-size: 2rem;
    }
  }

  .notice-image{
    img{
      object-fit: cover;
      width: 100%;
      height: 22rem;
      
      @media(min-width: 768px){
        height: 20rem;
      }
    }
  }
`;

export const NoticeThird = styled.div`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column;

  .notice-text{
    padding: 1rem;

    h2{
    font-size: 2rem;
    }
  }

  .notice-image img{
      object-fit: cover;
      width: 100%;
      height: 22rem;
  }
`;
