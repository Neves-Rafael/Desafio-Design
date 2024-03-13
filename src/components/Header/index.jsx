import { Container, HeaderBottom, HeaderMiddle, HeaderTop, HeaderMobile } from "./style";
import SenadoNoticiasLogo from "../../assets/senado-logo.svg"
import SenadoFederalLogo from "../../assets/senado.svg"
import { SearchInput } from "../SearchInput";
import { MdSignLanguage } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

export function Header(){

  return (
    <Container>
      <div>
        <HeaderTop>
          <div id="top-content">
            <div className="languages">
              <a href="#">ENGLISH</a>
              <a href="#">ESPAÑOL</a>
              <a href="#">FRANÇAIS</a>
            </div>

            <div className="accessibility">
              <p>Segunda, 4 de Março, 2024</p>
              <MdSignLanguage size={20}/>
              <a href="#">Acessibilidade</a>
            </div>
          </div>
        </HeaderTop>

        <HeaderMiddle>
          <div id="middle-content">
            <div className="Menu">
              <IoMenu size={32} />
              <p>Menu</p>
            </div>

            <img src={SenadoNoticiasLogo} alt="" />

            <div className="search">
              <img src={SenadoFederalLogo} alt="" />
              <SearchInput/>
            </div>
          </div>
        </HeaderMiddle>

        <HeaderBottom>
            <a>Notícias</a>
            <a>Especiais</a>
            <a>Fotos</a>
            <a>Serviços</a>
            <a>Expediente</a>
        </HeaderBottom>
      </div>

      <HeaderMobile>
        <IoMenu size={32} />
        <img src={SenadoNoticiasLogo} alt="" />
        <IoSearch size={22} />
      </HeaderMobile>
    </Container>
  )
}