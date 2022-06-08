import React from "react";
import TaskApp from "./components/TaskApp";
import task from "./data/tasks.json";
function App() {
  console.log(task)
  return <div>
    <TaskApp data = {task}/>
  </div>;
}

export default App;
