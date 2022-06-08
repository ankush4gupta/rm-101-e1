import React from "react";
import { Counter } from "../Counter"
import styles from "./task.module.css";

const Task = ({ task, todochange, deletetask}) => {
   
  const counterFun = (data)=>{
    if (data > 0) {
      todochange({
        ...task,
        count: data,
      });
    }
  }
  const updatedone = ()=>{
    todochange({
      ...task,
      done: !task.done,
    })
  }

  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" onChange={updatedone}className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text">{task.text}</div>
      {/* Counter here */}
      <Counter task = {task} counterFun={counterFun} />
      <button onClick={() => deletetask(task.id)} data-testid="task-remove-button">Delete</button>
    </li>
  );
};

export default Task;
