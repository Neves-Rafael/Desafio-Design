import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
      font-size: 62.5%;
    }
    
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto Slab', sans-serif;
      font-size: 1.6rem;
    }

    body {
      background-color: ${({theme}) => theme.COLORS.GRAY};
      
      &::-webkit-scrollbar {
        width: 12px; /* Largura da barra de rolagem inteira */
      }

      &::-webkit-scrollbar-track {
        background: none; /* Cor da área de rastreamento */
      }

      &::-webkit-scrollbar-thumb {
        background-color: gray;
      }
    }

    a {
      text-decoration: none;
    }


    button, a {
      cursor: pointer;
      transition: filter 0.2s;
      border: none;
    }

    input {
      border: none;
    }

    h2, img{
      cursor: pointer;
    }

    button:hover, a:hover, h2:hover {
      transition: all 200ms ease-in-out;
      color: ${({theme}) => theme.COLORS.PRIMARY_700};
    }    
`;