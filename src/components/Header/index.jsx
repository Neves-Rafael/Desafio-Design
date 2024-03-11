import { Container, HeaderBottom, HeaderMiddle, HeaderTop } from "./style";

export function Header(){

  return (
    <Container>
      <HeaderTop>
        <div>
          <a href="#">ENGLISH</a>
          <a href="#">ESPAÑOL</a>
          <a href="#">FRANÇAIS</a>
        </div>
        <div>
          <p>Segunda, 4 de Março, 2024</p>

          <a href="#">Acessibilidade</a>
        </div>
      </HeaderTop>
      <HeaderMiddle>
        <div>
          <p>Menu</p>
        </div>
      </HeaderMiddle>
      <HeaderBottom>
        <li>
          <ul>Notícias</ul>
          <ul>Especiais</ul>
          <ul>Fotos</ul>
          <ul>Serviços</ul>
          <ul>Expediente</ul>
        </li>
      </HeaderBottom>
    </Container>
  )
}