import { useContext } from "react";
import { taskContext } from "./TaskContext";

export function useTaskContext() {
  return useContext(taskContext);
}