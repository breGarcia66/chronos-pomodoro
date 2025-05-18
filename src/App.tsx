//Nomes de funções no uso de React deve ser escrito em PascalCase
import { Heading } from "./components/Heading";
import { Container } from "./components/Container";

import "./styles/themes.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
        <Container>
          <Heading>Pomodoro</Heading>
        </Container>
    </>
  );
}

//export { App } -> Export com nome específico
//export default App -> Export com nome indefinido
//export function App -> Outra maneira de export com nome específico
