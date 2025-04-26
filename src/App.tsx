//Nomes de funções no uso de React deve ser escrito em PascalCase
import { Heading } from "./components/Heading";

import "./styles/themes.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quasi sit
        illo! Beatae maxime ipsam libero veniam unde. Sapiente explicabo quaerat
        fugit aliquam atque incidunt repellendus doloremque ullam? Harum, odit.
      </p>
    </>
  );
}

//export { App } -> Export com nome específico
//export default App -> Export com nome indefinido
//export function App -> Outra maneira de export com nome específico
