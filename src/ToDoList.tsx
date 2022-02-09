//import React, { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
    if (toDo.length < 5) {
      return setToDoError("to do should be longer");
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          placeholder="Write to do"
        ></input>
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </>
  );
} */

function ToDoList() {
  const { register, watch } = useForm();
  //console.log(register("toDo"));
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("toDo")} placeholder="write a to do"></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
