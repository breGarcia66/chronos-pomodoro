import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { useTaskContext } from "../../contexts/TaskContext";
import { PlayCircle } from "lucide-react";

export function MainForm() {
  const { setState } = useTaskContext();

  function handleClick() {
    setState((prevState) => {
      return {
        ...prevState,
        formattedSecondsRemaining: "69:69",
      };
    });
  }

  return (
    <form className="taskForm" action="">
      <button type="button" onClick={handleClick}>
        Click
      </button>

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
