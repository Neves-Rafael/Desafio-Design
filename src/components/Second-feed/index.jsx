import { Container, NoticeFirst, NoticeSecond, NoticeThird } from "./style";
import Notice2 from "../../assets/materia 2.jpg";
import Notice5 from "../../assets/materia 5.jpg";
import Notice6 from "../../assets/materia 6.jpg";
import { useEffect, useState } from "react";

export function SecondFeed(){
  const [currentNotice, setCurrentNotice] = useState(0)

  const notice = [
    {
      text: "Plenário fará sessão temática sobre retomada de tributos ao setor de eventos",
      image: Notice2,
      alt: "Pessoas estão dispersas, sentadas em assentos azuis organizados em linhas retas. Algumas estão sentadas, enquanto outras estão em pé, conversando ou se movendo pelo local."
    },
    {
      text: "CDH fará audiência sobre Missão Josué de Castro, de combate à fome",
      image: Notice5,
      alt: "Pessoas debatendo durante uma sessão utilizando computador em mesas organizadas em linhas retas."
    },
  ];


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentNotice(prevNotice => (prevNotice + 1) % notice.length);
    }, 10000); //10seg

    return () => clearInterval(intervalId);
  }, []);

  return(
    <Container>
      <NoticeFirst>
        <div className="notice-text">
          <h2>{notice[currentNotice].text}</h2>
        </div>

        <div className="notice-image">
          <img src={notice[currentNotice].image} alt={notice[currentNotice].alt} />
        </div>
      </NoticeFirst>

      <div className="notice-row">
        <NoticeSecond>
          <div className="notice-image">
            <img src={Notice5} alt="Pessoas debatendo durante uma sessão utilizando computador em mesas organizadas em linhas retas." />
          </div>

          <div className="notice-text">
              <h2>CDH fará audiência sobre Missão Josué de Castro, de combate à fome</h2>
          </div>
        </NoticeSecond>

        <NoticeThird>
          <div className="notice-image">
            <img src={Notice6} alt="Pessoas debatendo durante uma sessão utilizando computador em mesas organizadas em linhas retas." />
          </div>

          <div className="notice-text">
            <h2>CMA aprova critérios para volume sonoro em templos</h2>
          </div>
        </NoticeThird>
      </div>

      <div className="notice-row copy-2">
        <NoticeSecond>
          <div className="notice-image">
            <img src={Notice5} alt="Pessoas debatendo durante uma sessão utilizando computador em mesas organizadas em linhas retas." />
          </div>

          <div className="notice-text">
              <h2>CDH fará audiência sobre Missão Josué de Castro, de combate à fome</h2>
          </div>
        </NoticeSecond>

        <NoticeThird>
          <div className="notice-image">
            <img src={Notice6} alt="Pessoas debatendo durante uma sessão utilizando computador em mesas organizadas em linhas retas." />
          </div>

          <div className="notice-text">
            <h2>CMA aprova critérios para volume sonoro em templos</h2>
          </div>
        </NoticeThird>
      </div>
    </Container>
  )
};