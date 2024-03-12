import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Divider } from "../../components/Divider";
import { Principal } from "../../components/Principal";



export function App() {

  return (
    <Container>
      <Header/>
        <div className="teste">
      <Principal/>

        </div>
      <Divider/>
      <Footer/>
    </Container>
  )
}

