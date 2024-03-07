import React from "react";
import { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState({
    title: "",
    content: "",
  });

  function detectChange(event) {
    // name, value = event.target'taki name ve value değerlerini ayırır
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
    props.onAdd(task)
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
        <button className="btn btn-primary todoButton" onClick={submitTask}>
          Ekle
        </button>
      </form>
    </div>
  );
}
