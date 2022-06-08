import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({task}) => {
  // sample values to be replaced
  let totalTask = task.length;
  let unCompletedTask = task.filter((e) => !e.done).length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h3>Todo List</h3>
      <b data-testid="header-remaining-task">You have {unCompletedTask} /</b>
      <b data-testid="header-total-task">{totalTask} task remaining</b>
    </div>
  );
};

export default TaskHeader;
