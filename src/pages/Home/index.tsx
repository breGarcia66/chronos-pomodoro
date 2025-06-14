import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../template/MainTemplate";

type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

export function Home(props: HomeProps) {
  const { state, setState } = props;
  
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
