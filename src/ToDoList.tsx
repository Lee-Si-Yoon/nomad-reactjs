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
  const { register, watch, handleSubmit, formState } = useForm();
  // handleSubmit handles validation
  //console.log(register("toDo"));
  //console.log(watch());
  //console.log(formState.errors); = to see error
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("toDo", {
            required: true,
            minLength: { value: 5, message: "toDo is short" },
          })}
          placeholder="write a to do"
          required
        ></input>
        {/* to prevent removing from html required */}
        <input
          {...register("name", { required: "name is required" })}
          placeholder="name"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
