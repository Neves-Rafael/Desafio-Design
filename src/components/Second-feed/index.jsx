import { Container, NoticeFirst, NoticeSecond, NoticeThird } from "./style";
import Notice1 from "../../assets/materia 1.jpg"
import Notice2 from "../../assets/materia 2.jpg"
import Notice3 from "../../assets/materia 3.jpg"

export function SecondFeed(){

  return(
    <Container>
      <NoticeFirst>
        <div className="notice-text">
          <h2>Cédula de crédito pública em favor de microempresa está na pauta do Plenário</h2>
        </div>

        <div className="notice-image">
          <img src={Notice2} alt="" />
        </div>
      </NoticeFirst>

      <div className="notice-row">
        <NoticeSecond>
          <div className="notice-image">
            <img src={Notice2} alt="" />
          </div>

          <div className="notice-text">
              <h2>Plenário fará sessão temática sobre retomada de tributos ao setor de eventos</h2>
          </div>
        </NoticeSecond>

        <NoticeThird>
          <div className="notice-image">
            <img src={Notice3} alt="" />
          </div>

          <div className="notice-text">
            <h2>Senado entrega Diploma Bertha Lutz na quarta-feira.</h2>
          </div>
        </NoticeThird>
      </div>
    </Container>
  )
};