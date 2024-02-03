import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const TasksContext = createContext();

//? yaratma, silme, güncelleme işlemlerimin hepsi burada olsun. Tüm kapsadıklarmına children diyelim
function Provider({ children }) {
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

  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    deleteTaskById,
    editTaskById,
  };

  return (
    //? burda value kısmında neyi tanımladıysam onlara erişebilirim
    <TasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
