import { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskstate";
import { createContext } from "react";

type taskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

export const taskContext = createContext<taskContextProps>(initialContextValue);
