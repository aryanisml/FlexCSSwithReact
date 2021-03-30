import { StateProvider } from "./StateProvider";
import StateReducer, { initialState } from "./StateReducer";
import Task from "./Task";
import "./styles.css";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <StateProvider initialState={initialState} reducer={StateReducer}>
        <Header>
          <h1>TO DO APP </h1>
        </Header>
        <Container>
          <Task />
        </Container>
      </StateProvider>
    </>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;
  background-color: tomato;
  height: auto;
  align-items: center;

  h1 {
    color: white;
  }
`;

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 10px;
  height: auto;
  box-shadow: 5px 5px 18px gray;
  border-radius: 4px;
`;
