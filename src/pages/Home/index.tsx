import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { MainTemplate } from "../../template/MainTemplate";

export function Home() {
  
  //Exemplo de como alterar um state quando é um objeto mutável
  
  // function handleClick() {
  //   setState(prevState => {
  //     return{
  //       ...prevState,
  //       currentCycle: 8,
  //     };
  //   });
  // };

  return (
    <MainTemplate>
      {/* <Container>
        <button onClick={handleClick}>Click me</button>
      </Container> */}

      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
