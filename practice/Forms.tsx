//import styled, { keyframes } from "styled-components";
//import Circle from "./Circle";
import { useState } from "react";

function Form() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //console.log(event.currentTarget.value);
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <div>
      {/*<Circle borderColor="yellow" bgColor="teal" />
      <Circle bgColor="tomato" /> */}
      <form onSubmit={onSubmit}>
        <input
          value={value}
          type="text"
          onChange={onChange}
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default Form;
