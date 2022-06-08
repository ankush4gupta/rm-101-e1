import React from "react";
import styles from "./counter.module.css";

const Counter = ({ task, counterFun}) => {
  let count = task.count
  // sample value to be replaced
  
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button  onClick = {()=>{
        counterFun(count+1)
      }}data-testid="task-counter-increment-button">plus</button>
      <span data-testid="task-counter-value">{count}</span>
      <button onClick={() => {
        counterFun(count - 1)
      }} data-testid="task-counter-decrement-button">minus</button>
    </div>
  );
};

export default Counter;
