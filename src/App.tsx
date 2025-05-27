//Nomes de funções no uso de React deve ser escrito em PascalCase

// import { AboutPomodoro } from "./pages/AboutPomodoro";
// import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";

import "./styles/themes.css";
import "./styles/global.css";

export function App() {
  return <Home />
}

//export { App } -> Export com nome específico
//export default App -> Export com nome indefinido
//export function App -> Outra maneira de export com nome específico
