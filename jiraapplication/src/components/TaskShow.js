import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskShow({ task }) {
  //? editTaskById ve deleteTaskById çektik ki silme ve güncelleme işlemlerini yapalım
  const { editTaskById, deleteTaskById } = useContext(TasksContext);

  //güncelle butonuna basmadan önce false olsun
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    //onDelete(task.id);
    deleteTaskById(task.id);
  };

  const handleEditClick = () => {
    //güncelle butonuna basınca true olsun
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    //güncelleme işlemi gerçekleştiği için false yapabiliriz
    setShowEdit(false);
    //onUpdate(id, updatedTitle, updatedTaskDesc);
    editTaskById(id, updatedTitle, updatedTaskDesc);
  };

  return (
    <div className="task-show">
      {/* showEdit true ise TaskCreate component'i görünsün false ise normal girdiğim değerler yazsın */}
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button onClick={handleDeleteClick} className="task-delete">
              Sil
            </button>
            <button onClick={handleEditClick} className="task-edit">
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
