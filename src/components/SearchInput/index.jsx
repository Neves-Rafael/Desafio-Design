import { Container } from "./style";
import { IoSearch } from "react-icons/io5";

export function SearchInput(){

  return(
    <Container>
      <IoSearch size={22} />
        <input type="text" placeholder="Buscar" />
    </Container>
  )
};