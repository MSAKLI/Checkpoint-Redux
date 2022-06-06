import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../redux/action";
import {Button} from 'react-bootstrap' ;

const NewTask = () => {
  const dispatch = useDispatch();
  const [addtext, setAddtext] = useState("");
  const handleAdd = () => {
    dispatch(add_todo({ text: addtext, id: Math.random(), done: false }));
  };
  return (
    <div>
      <input type="text" name="new-task"  placeholder="Add your task" onChange={(e) => setAddtext(e.target.value)}/>
      <Button onClick={handleAdd}>Add</Button>
    </div>
  );
};

export default NewTask;
