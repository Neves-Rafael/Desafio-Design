import { Container, NoticeFirst, NoticeSecond, NoticeThird } from "./style";
import Notice6 from "../../assets/materia 1.jpg"
import Notice7 from "../../assets/dengue.jpg"
import Notice8 from "../../assets/serrado.jpg"

export function ThirdFeed(){

  return(
    <Container>
      <NoticeFirst>
        <div className="notice-image">
          <img src={Notice8} alt="" />
        </div>
        
        <div className="notice-text">
          <h2>Mudanças climáticas ameaçam a Caatinga com desertificação e perda de espécies</h2>
        </div>

      </NoticeFirst>

      <div className="notice-row">
        <NoticeSecond>
          <div className="notice-text">
              <h2>Dengue: clima, água parada e falhas do poder público causaram explosão de casos</h2>
          </div>

          <div className="notice-image">
            <img src={Notice7} alt="" />
          </div>
        </NoticeSecond>

        <NoticeThird>
          <div className="notice-image">
            <img src={Notice6} alt="" />
          </div>

          <div className="notice-text">
            <h2>Poucos profissionais monitoravam minas em Maceió, diz depoente à CPI</h2>
          </div>
        </NoticeThird>
      </div>
    </Container>
  )
};