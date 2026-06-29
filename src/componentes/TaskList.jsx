import TaskCard from "./TaskCard";

function TaskList({ tasks, search, filter, setTasks }) {

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || task.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (

    <div className="cards">

    {filteredTasks.map((task) => (

        <TaskCard

          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
        />

      ))}

    </div>

  );

}

export default TaskList;