import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Divider } from "../../components/Divider";
import { MainFeed } from "../../components/Main-feed";
import { SecondFeed } from "../../components/Second-feed"
import { ThirdFeed } from "../../components/Third-feed"



export function App() {

  return (
    <Container>
      <Header/>

      <main>
        <MainFeed/>
        <Divider/>
        <SecondFeed/>
        <Divider/>
        <ThirdFeed/>
      </main>

      <Footer/>
    </Container>
  )
};

