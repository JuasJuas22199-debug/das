import { useState } from "react";
import Swal from "sweetalert2";

function TaskForm({ tasks, setTasks }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [priority, setPriority] = useState("low");

  const addtask = (e) => {

    e.preventDefault();

    if (!title || !description) {
      
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, completa todos los campos.",
      });
    
  return;

    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      status,
      priority,
    };

    setTasks([...tasks, newTask]);
    
    Swal.fire({
      icon: "success",
      title: "Tarea agregada",
      text: "La tarea se ha agregado correctamente.",
    }); 

    setTitle("");
    setDescription("");
    setStatus("pending");
    setPriority("low");
  }

  return (
    
    <form className="task-form" onSubmit={addtask}>

      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <textarea
        placeholder="Descripción de la tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="high">Alta</option>
      </select>

      <button 
        className="btn btn-primary">
        <i className="bi bi-plus-circle"></i>      
        Agregar Tarea
      </button>
    </form>
  );
}

export default TaskForm;