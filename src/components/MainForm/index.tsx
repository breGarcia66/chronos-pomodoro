import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { PlayCircle } from "lucide-react";
import { useState } from "react";

export function MainForm() {
  const [taskName, setTaskName] = useState("");

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Testando evento de submeter página...");
  }

  return (
    <form onSubmit={handleCreateNewTask} className="taskForm" action="">
      <div className="formRow">
        <DefaultInput
          id="myInput"
          type="text"
          labelText="Task:"
          placeholder="Type something..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>

      <div className="formRow">
        <p>O próximo intervalo será de 25min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton propIcon={<PlayCircle />} />
      </div>
    </form>
  );
}
