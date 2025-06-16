import { useState } from "react";
import { initialTaskState } from "./initialTaskstate";
import { taskContext } from "./TaskContext";

type taskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: taskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  return (
    <taskContext.Provider value={{ state, setState }}>
      {children}
    </taskContext.Provider>
  );
}