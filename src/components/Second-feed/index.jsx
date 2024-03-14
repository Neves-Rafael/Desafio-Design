import { Container, NoticeFirst, NoticeSecond, NoticeThird } from "./style";
import Notice2 from "../../assets/materia 2.jpg"
import Notice5 from "../../assets/materia 5.jpg"
import Notice6 from "../../assets/materia 6.jpg"

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
            <img src={Notice5} alt="" />
          </div>

          <div className="notice-text">
              <h2>CDH fará audiência sobre Missão Josué de Castro, de combate à fome</h2>
          </div>
        </NoticeSecond>

        <NoticeThird>
          <div className="notice-image">
            <img src={Notice6} alt="" />
          </div>

          <div className="notice-text">
            <h2>CMA aprova critérios para volume sonoro em templos</h2>
          </div>
        </NoticeThird>
      </div>
    </Container>
  )
};