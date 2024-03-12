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
      background-color: black;
      
      &::-webkit-scrollbar {
        width: 12px; /* Largura da barra de rolagem inteira */
      }

      &::-webkit-scrollbar-track {
        background: none; /* Cor da área de rastreamento */
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.COLORS.LIGHT_600}; /* Cor do polegar de rolagem */
        border-radius: 20px; /* Arredondamento do polegar de rolagem */
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

    button:hover, a:hover {
      transition: all 200ms ease-in-out;
      filter: brightness(1.5);
    }    
`;