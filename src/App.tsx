//Nomes de funções no uso de React deve ser escrito em PascalCase
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";

import "./styles/themes.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
      
      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="taskForm" action="">
          <div className="formRow">
            <label htmlFor="taskTitle">Taks:</label>
            <input id="taskTitle" type="text" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos:</p>
            <div>0 0 0 0 0 0 0 0 0</div>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

//export { App } -> Export com nome específico
//export default App -> Export com nome indefinido
//export function App -> Outra maneira de export com nome específico
