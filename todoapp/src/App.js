import "./App.css";
import CreateTask from "./CreateTask";
import Footer from "./Footer";
import Header from "./Header";
import Task from "./Task";
import { useState } from "react";

function App() {
  // listelemek için
  const [tasks, setTasks] = useState([]);

  // eklemek için
  const addTask = (newTask) => {
    setTasks((prevTask) => {
      return [...prevTask, newTask];
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.filter((taskItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <Header />
      <CreateTask onAdd={addTask} />
      <div className="container">
        <div className="row my-5">
          {tasks.map((taskItem, index) => {
            return (
              <Task
                key={index}
                id={index}
                title={taskItem.title}
                content={taskItem.content}
                onDelete={deleteTask}
              />
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
