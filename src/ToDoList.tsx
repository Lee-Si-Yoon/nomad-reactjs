//import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  toDo?: string; // if it not required
  name: string;
  email: string;
  password?: any;
  password1?: any;
  extraError?: string;
}

function ToDoList() {
  const {
    register, // to use form
    //watch,
    handleSubmit, // handleSubmit handles validation
    formState: { errors }, // to see error
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
      toDo: "anything",
      name: "you name",
    },
  });

  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "password not same" },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "Server offline" });
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
          {...register("name", {
            required: "name is required",
            validate: {
              nico: (value) =>
                value.includes("nico") ? "no nico allowed" : true,
              noNic: (value) =>
                value.includes("nic") ? "no nico allowed" : true,
            },
          })}
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
        <input {...register("password")} placeholder="name"></input>
        <input {...register("password1")} placeholder="name"></input>
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
