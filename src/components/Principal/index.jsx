import { Container, NoticeFirst, NoticeSecond, NoticeThird } from "./style";
import Notice1 from "../../assets/materia 1.jpg"
import Notice2 from "../../assets/materia 2.jpg"
import Notice3 from "../../assets/materia 3.jpg"

export function Principal(){

  return(
    <Container>
      <NoticeFirst>
        <div className="notice-text">
          <h2>Cédula de crédito pública em favor de microempresa está na pauta do Plenário</h2>

          <p>O Plenário do Senado analisa nesta terça-feira (5) projeto com objetivo de impedir que micros e pequenas empresas sofram com a falta de pagamento em contratos com a administração pública.</p>

          <p> O Projeto de Lei Complementar (PLP) 137/2019, do senador Flávio Arns (PSB-PR), determina a concessão de cédula de crédito a microempresas que não tenham recebido pagamento, no prazo de 30 dias, pelos bens ou serviços executados no âmbito do Estado. </p>

          <p>A sessão está prevista para começar às 14h. Se os senadores aprovarem o projeto, o texto irá à Câmara dos Deputados.</p>
        </div>

        <div className="notice-image">
          <img src={Notice1} alt="" />
        </div>
      </NoticeFirst>

      <NoticeSecond>
        <div className="notice-text">
            <h2>Plenário fará sessão temática sobre retomada de tributos ao setor de eventos</h2>

            <p>O Senado promove na terça-feira (5), a partir das 10h, sessão temática no Plenário para debater os impactos que a extinção do Programa Emergencial de Retomada do Setor de Eventos (Perse) pode causar no setor hoteleiro. O programa foi criado pela Lei 14.148, de 2021, para conceder benefícios tributários ao setor de eventos, que foi prejudicado pela pandemia da covid-19.</p>
        </div>

        <div className="notice-image">
          <img src={Notice2} alt="" />
        </div>
      </NoticeSecond>

      <NoticeThird>
        <div className="notice-image">
          <img src={Notice3} alt="" />
        </div>

        <div className="notice-text">
          <h2>Senado entrega Diploma Bertha Lutz na quarta-feira.</h2>

          <p>O Senado homenageia cinco mulheres em sessão solene, na quarta-feira (6), com a entrega do Diploma Mulher-Cidadã Bertha Lutz.</p>
        </div>
      </NoticeThird>
    </Container>
  )
};