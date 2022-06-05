import React from "react";
import Task from "./Task";
import NewTask from "./NewTask";
import { useSelector } from "react-redux";
const TodoList = () => {
    const list = useSelector((state) => state.reducer.todoList);
    console.log("list", list)
  return (
    <div>
      <h1>welcome to my To Do List !</h1>
      <h3> type in the input below to add a nex task!</h3>
      <NewTask />
      {list.map((el)=>
      <Task  key={el.id} name={el.name} done={false} />
      )}
    </div>
  );
};
export default TodoList;
