import React, { useState } from "react";
import { v4 } from "uuid";
import styles from "./taskApp.module.css";
import { AddTask } from "./AddTask";
import { TaskHeader } from "./TaskHeader";
import Tasks from "./Tasks/Tasks"


const TaskApp = ({data}) => {
  const [task,setnewtask] =  useState(data);
  const addnewtask = (newdata)=>{
        let taskdata = {
          id: v4(),
          text: newdata,
          done: false,
          count: 1,
        }
    setnewtask([...task, taskdata])
  }
  const deletetask = (id) => {
    let newdata = task.filter((task) => task.id !== id);
    setnewtask(newdata);
  };
  const todochange = (x) => {
    let newTasks = task.reduce((pre, crr) => {
      if (crr.id === x.id) {
        pre.push(x);
      } else {
        pre.push(crr);
      }
      return pre;
    }, []);
    setnewtask([...newTasks]);
  };

  console.log("data",task)
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader task={task}/>
      <AddTask addnewtask={addnewtask}/>
     
      {/* Tasks */}
      <Tasks todochange={todochange} task={task} deletetask={deletetask} />
      
    </div>
  );
};

export default TaskApp;
