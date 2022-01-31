import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border-radius: 15px;
  border: 0;
`;
const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

const rotation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius : 0px;
  } 50% {
    transform: rotate(360deg);
    border-radius : 100px;
  } 100% {
    transform: rotate(0deg);
    border-radius : 0px;
  }
`;
const Emoji = styled.span`
  font-size: 36px;
`;
const AniBox = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 2s linear infinite;
  ${Emoji}:hover {
      font-size: 64px;
    }
  }
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Father>
      {/* BASIC SHAPE */}
      {/*<Box bgColor="teal" />*/}

      {/* EXTENDED SHAPE */}
      {/*<Circle bgColor="tomato" />*/}

      {/* AS TAGS, changes the tag */}
      {/*<Btn>Log in</Btn>*/}
      {/*<Btn as="a" href="/">
        Log in
      </Btn>*/}

      {/** CHANGE FROM STYLES  */}
      {/*<Input></Input>*/}

      {/** ANIMATION && PSEUDO SELECTOR */}
      {/*<AniBox>
        <Emoji>🤩</Emoji>
      </AniBox>
      <Emoji>🔥</Emoji> */}

      {/* THEMES */}
      {/* */}
      <Title>Hello</Title>
    </Father>
  );
}

export default App;
