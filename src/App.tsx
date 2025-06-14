//Nomes de funções no uso de React deve ser escrito em PascalCase

// import { AboutPomodoro } from "./pages/AboutPomodoro";
// import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { TaskStateModel } from "./models/TaskStateModel";
import { useState } from "react";

import "./styles/themes.css";
import "./styles/global.css";

const initialState: TaskStateModel = {
  task: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 30,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return <Home />;
}

//export { App } -> Export com nome específico
//export default App -> Export com nome indefinido
//export function App -> Outra maneira de export com nome específico
