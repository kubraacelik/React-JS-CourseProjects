import React from "react";
import { useState } from "react";

export default function CreateTask(props) {

  const [task, setTask] = useState({
    title: "",
    content: "",
  });

  function detectChange(event) {
    // name, value = event.target'taki name (yani title ve content) ve value (girdiğim değer) değerlerini ayırır
    const { name, value } = event.target;
    // prevTask : önceki değer
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  }

  function submitTask(event) {
    props.onAdd(task);
    setTask({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="todoDivArea">
      <form className="todoDiv">
        <input
          type="text"
          className="form-control todoText mb-3"
          name="title"
          value={task.title}
          onChange={detectChange}
          placeholder="Başlık"
        />
        <textarea
          name="content"
          value={task.content}
          onChange={detectChange}
          className="form-control todoText mb-3"
          rows={3}
          placeholder="İşinizi Yazınız"
        ></textarea>
        <div className="text-center">
          <button className="btn btn-primary todoButton" onClick={submitTask}>
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
}
