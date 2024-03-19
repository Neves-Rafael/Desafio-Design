import { Container, Links, Social, InfoContact, Address } from "./style";
import { SearchInput } from "../SearchInput"
import SenadoFederalLogo from "../../assets/senado.svg"
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaYoutube, FaFlickr, FaTelegram, FaPhoneAlt  } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export function Footer(){
  return(
    <Container>
      <div className="footer-content">
        <img src={SenadoFederalLogo} alt="Logo do senado Federal" />
        <SearchInput/>
        <Links>
          <a href="#">Fotos</a>
          <a href="#">Senado 200 anos</a>
          <a href="#">Serviços</a>
          <a href="#">Reforma Tributária</a>
          <a href="#">Expediente</a>
          <a href="#">Atos 8 de janeiro</a>
          <a href="#">Notícias</a>
          <a href="#">Especiais</a>
          <img className="senado-logo" src={SenadoFederalLogo} alt="Logo do senado Federal" />
        </Links>

        <Social>
          <SearchInput/>
          <div className="social-content">
            <p>Siga o Senado</p>
            <div className="icon-social">
              <FaFacebook size={25}/>
              <FaFlickr size={25}/>
              <FaInstagram size={25}/>
              <FaLinkedin size={25}/>
              <FaWhatsapp size={25}/>
              <BsTwitterX size={25}/>
              <FaYoutube size={25}/>
              <FaTelegram size={25}/>
            </div>
          </div>
        </Social>

        <InfoContact>
          <div>
            <a href="#">Termos de uso</a>
            <a href="#">Acessibilidade</a>
            <a href="#">Sobre</a>
          </div>

          <div>
            <FaPhoneAlt size={20}/>
            <a href="#">Fale Conosco</a>
          </div>
        </InfoContact>

        <Address>
          <p>Senado Federal  - Praça dos Três Poderes - Brasília DF - CEP 70165-900  /  Telefone: 0800 0 61 2211</p>
          <p>© 2024 Todos os direitos reservados</p>
        </Address>
      </div>
    </Container>
  )
};