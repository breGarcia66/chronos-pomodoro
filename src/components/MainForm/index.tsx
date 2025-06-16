import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { PlayCircle } from "lucide-react";

export function MainForm() {

  return (
    <form className="taskForm" action="">
      <div className="formRow">
        <DefaultInput
          id="myInput"
          type="text"
          labelText="Task:"
          placeholder="Type something..."
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
