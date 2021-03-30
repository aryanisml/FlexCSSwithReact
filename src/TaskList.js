import { useState } from "react";
import styled from "styled-components";

const TaskList = (props) => {
  const colors = ["red", "green", "pink"];
  const [defaultColor, setColor] = useState("");
  const selectionChange = (e) => {
    setColor(e.target.value === "Select Color" ? "" : e.target.value);
  };
  return (
    <>
      <TaskContainer>
        <TaskLabel>
          <span style={{ color: defaultColor }}> {props.value}</span>
        </TaskLabel>
        <TaskColor>
          <select onChange={selectionChange}>
            <option>Select Color</option>
            {colors.map((value, index) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </TaskColor>
      </TaskContainer>
    </>
  );
};
export default TaskList;

const TaskContainer = styled.div`
  display: flex;
  /* border: 1px solid steelblue; */
  width: 100%;
  justify-content: center;
  margin-top: 8px;
`;

const TaskLabel = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
  /* border: 1px solid red; */
  width: 50%;
  /* width: 50%; */
`;

const TaskColor = styled.div`
  select {
    height: 20px;
  }
  /* border: 1px solid blue; */
`;
