import styled from "styled-components";
//import { useState } from "react";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string; //optional props
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  //const [counter, setCounter] = useState<number | string>(); // can be number or string
  //setCounter("1");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
  //borderColor if undefined, give bgColor
}

export default Circle;
