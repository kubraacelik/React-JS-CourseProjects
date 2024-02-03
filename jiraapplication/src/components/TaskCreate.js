import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskformUpdate, onUpdate }) {
  //? createTask'ı çektik ki task oluşturma işlemi yapılsın
  const { editTaskById, createTask } = useContext(TasksContext);

  //düzenleme kısmı için task varsa o anki title gelsin yoksa boş gelsin
  const [title, setTitle] = useState(task ? task.title : "");
  //düzenleme kısmı için task varsa o anki taskDesc gelsin yoksa boş gelsin
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //güncelle true ise güncelleme fonk çalışsın, false ise oluştur fonk çalışsın
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
      //editTaskById(task.id, title, taskDesc);
    } else {
      //onCreate(title, taskDesc);
      createTask(title, taskDesc);
    }
    //butona bastıktan sonra inputlardaki değerler silinsin
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {/* birbirlerine benzedikleri için yapıldı. taskformUpdate true ise düzenleme kısmı olsun false ise form kısmı gibi olsun */}
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz!</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Düzenleyiniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button
              onClick={handleSubmit}
              className="task-button update-button"
            >
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button onClick={handleSubmit} className="task-button">
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
