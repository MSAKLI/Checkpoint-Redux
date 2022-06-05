import { ADD, DELETE_TODO, DONE, EDIT } from "../actiontype";

const initialState = {
  todoList: [
    { name: "learn js", id: Math.random(), done: false },
    { name: "learn react", id: Math.random(), done: false },
    { name: "learn node", id: Math.random(), done: false },
  ],
};

export const reducer = (state = initialState, action) => {

    let { type, payload } = action;
    switch (type) {
      case ADD:
        return {
          ...state,
          Task: [...state.Task, payload],
        };
      case DELETE_TODO:
        return {
          ...state,
          Task: state.Task.filter((el) => el.id !== payload),
        };
      case DONE:
        return {
          ...state,
          Task: state.Task.map((el) =>
            el.id == payload ? { ...el, done: !el.done } : el
          ),
        };
      case EDIT:
        return {
          ...state,
          Task: state.Task.map((el) =>
            el.id == payload.id ? { ...el, name: payload.newTask } : el
          ),
        };
  
      default:
        return state;
    }
}