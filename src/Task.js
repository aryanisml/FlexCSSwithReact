import { useState } from "react";
import { useStateValue } from "./StateProvider";
import TaskList from "./TaskList";
import styled from "styled-components";

export const Task = () => {
  const [taskDetails, dispatch] = useStateValue();
  const [task, setTask] = useState("");

  const handlerChange = (e) => {
    setTask(e.target.value);
  };
  const addHandler = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: `ADD_TASK`, payload: task });
      setTask("");
    }
  };

  return (
    <>
      <TODOContainer>
        <TODOContainerInput>
          <TODOInput>
            <input
              type="text"
              value={task}
              onChange={handlerChange}
              onKeyDown={addHandler}
            />
          </TODOInput>
        </TODOContainerInput>
        <TODOResult>
          {taskDetails &&
            taskDetails.task.length > 0 &&
            taskDetails.task.map((value, index) => (
              <>
                <TaskList value={value} key={value} />
              </>
            ))}
        </TODOResult>
      </TODOContainer>
    </>
  );
};

export default Task;

const TODOContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const TODOInput = styled.div`
  display: flex;
  padding: 10px;
  flex: 0 0 60%;
  box-sizing: border-box;
  input {
    flex-grow: 1;
    z-index: 1;
    :focus {
      outline: none;
    }
    height: 20px;
  }
`;

const TODOResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid yellow; */
  width: 100%;
  /* flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  border: 1px solid yellow; */
`;

const TODOContainerInput = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
