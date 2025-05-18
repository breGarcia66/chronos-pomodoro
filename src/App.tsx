//Nomes de funções no uso de React deve ser escrito em PascalCase
import { Heading } from "./components/Heading";

import "./styles/themes.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="content">
            <section>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium expedita facere, omnis labore voluptatem dolore
              officia autem, neque sunt ut, necessitatibus in ipsum. Sequi quam
              dolores doloremque nulla sed aliquam.
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

//export { App } -> Export com nome específico
//export default App -> Export com nome indefinido
//export function App -> Outra maneira de export com nome específico
