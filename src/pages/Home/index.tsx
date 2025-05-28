import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../template/MainTemplate";

type HomeProps = {
  propState: TaskStateModel;
  propSetState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

export function Home(props: HomeProps) {
  const { state, propSetState } = props;

  return (
    <MainTemplate>
      <Container>
        <button onClick={handleClick}>Click me</button>
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
