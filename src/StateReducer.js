export const initialState = {
  task: []
};
//// TaskName , TaskColor

const StateReducer = (state = initialState, action) => {
  switch (action.type) {
    case `ADD_TASK`:
      return {
        ...state,
        task: state.task.concat(action.payload)
      };
    default:
      return { ...state };
  }
};

export default StateReducer;
