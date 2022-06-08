import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ addnewtask}) => {
  const [text,newtext] = useState("")
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.todoForm}>
      <input onChange={(e)=>{
        newtext(e.target.value)
      }} data-testid="add-task-input" type="text" />
      <button onClick={()=>{
        addnewtask(text);
      }} data-testid="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
