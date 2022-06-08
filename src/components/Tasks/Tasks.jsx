import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"

const Tasks = ({ task, deletetask, todochange}) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      {task.length > 0 ? (
        <ul data-testid="tasks" className={styles.tasks}>
          {/* Task List */}
          {task.map((e) => (
            <Task
              key={e.id}
              task={e}
              todochange={todochange}
              deletetask={deletetask}

              
            />
          ))}
        </ul>
      ) : (
        <div data-testid="tasks-empty" className={styles.empty}>
          {/* Show when No Tasks are present */}
          <p>No pending Task left Add more</p>
        </div>
      )}
    </>
  );
};

export default Tasks;
