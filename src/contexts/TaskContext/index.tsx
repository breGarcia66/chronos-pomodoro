import { createContext, useContext, useState } from "react";
import { TaskStateModel } from "../../models/TaskStateModel";

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

type taskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

export const taskContext = createContext<taskContextProps>(initialContextValue);

type taskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: taskContextProviderProps) {
  const [state, setState] = useState(initialState);

  return (
    <taskContext.Provider value={{ state, setState }}>
      {children}
    </taskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(taskContext);
}
