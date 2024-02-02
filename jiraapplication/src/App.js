import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, taskDesc) => {
    //? her oluştur butonuna bastığımda yazdığım bilgileri db.json'a kaydedecek
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    console.log(response);

    //her yeni eleman oluştuğunda çalışsın
    const createdTasks = [...tasks, response.data];
    debugger;
    setTasks(createdTasks);
  };

  //? sayfa yenilenince kaydedilen bilgiler silinmesin ekrana gelsin, (useEffect ile kullanıldı)
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  //sil butonu
  const deleteTaskById = async (id) => {
    //? sil butonuna basınca yaptığım değişiklik db.json'da da değişsin
    await axios.delete(`http://localhost:3000/tasks/${id}`);

    //taskları bastığım id hariç diğerlerini getir şeklinde filtreliyoruz
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(afterDeletingTasks);
  };

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    //? güncelle butonuna basınca yaptığım değişiklik db.json'da da değişsin
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });

    const UpdatedTasks = tasks.map((task) => {
      //eğer task'ın id'si bana parametre olarak gelen id'ye eşitse artık id, title ve taskDesc kısmı
      //yeni yazılan değerlere eşit oluyor. Eşit değilse normal task dönüyor
      if (task.id === id) {
        return { id: id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });

    setTasks(UpdatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}
export default App;
