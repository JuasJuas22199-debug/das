import Swal from "sweetalert2";

function TaskCard({ task, tasks, setTasks }) {

const deleteTask = async () => {

  const result = await Swal.fire({
    title: "¿Eliminar tarea?",
    text: "No podrás recuperar esta tarea.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6"
  });

  if (result.isConfirmed) {

    setTasks(tasks.filter((t) => t.id !== task.id));

    Swal.fire({
      icon: "success",
      title: "¡Eliminada!",
      text: "La tarea fue eliminada correctamente.",
      timer: 1500,
      showConfirmButton: false
    });

  }

};

  const completeTask = () => {
    const updated = tasks.map((t) =>
      t.id === task.id
        ? {
            ...t,
            status: t.status === "pending" ? "completed" : "pending",
          }
        : t
    );

    setTasks(updated);
  };

  return (
    <div className="card">
      <h2>{task.title}</h2>

      <p>{task.description}</p>

      <p>
        <strong>Prioridad:</strong> {""}
        {task.priority === "high" ? (
          <i className="bi bi-flag-fill text-danger"></i>
        ) : task.priority === "medium" ? (
          <i className="bi bi-flag-fill text-warning"></i>
        ) : (
          <i className="bi bi-flag-fill text-success"></i>
        )}{""}
        {task.priority}
      </p>


      <p>
        <strong>Estado:</strong> {task.status}
      </p>

      <button onClick={completeTask}>
        Cambiar estado
      </button>

      <button onClick={deleteTask}>
        <i className="bi bi-trash-fill"></i>
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;