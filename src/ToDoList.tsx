//import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  toDo?: string; // if it not required
  name: string;
  email: string;
}

function ToDoList() {
  const {
    register, // to use form
    watch,
    handleSubmit, // handleSubmit handles validation
    formState: { errors }, // to see error
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
      toDo: "anything",
      name: "you name",
    },
  });

  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
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
        <span>{errors?.name?.message}</span>
        <input
          {...register("email", {
            required: "email required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver.com",
            },
          })}
          placeholder="email"
        ></input>
        <span>{errors?.email?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
