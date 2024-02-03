import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useContext } from "react";
import TasksContext from "./context/task";

function App() {
  //? fetchTask'a erişimini sağladık ki var olan data'lar gelsin
  const { fetchTasks } = useContext(TasksContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}
export default App;
