import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Divider } from "../../components/Divider";
import { MainFeed } from "../../components/Main-feed";
import { SecondFeed } from "../../components/Second-feed"



export function App() {

  return (
    <Container>
      <Header/>

      <main>
        <MainFeed/>
        <Divider/>
        <SecondFeed/>
      </main>

      <Footer/>
    </Container>
  )
};

