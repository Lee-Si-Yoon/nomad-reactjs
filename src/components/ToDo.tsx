import { IToDo } from "../atoms";

function ToDo({ text, category }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <button>ToDo</button>
      <button>Done</button>
      <button>Doing</button>
    </li>
  );
}

export default ToDo;
