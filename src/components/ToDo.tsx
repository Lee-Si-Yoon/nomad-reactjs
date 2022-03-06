import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  // selector for interface ITodo["category"]
  /*
   const onClick = (newCategory: IToDo["category"]) => {
    console.log("goto" + newCategory);
  };
  */
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      // toDo.id is id from onClick, id is from props sent by ToDoList
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      //const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          ToDo
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Done
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Doing
        </button>
      )}
    </li>
  );
}

export default ToDo;
