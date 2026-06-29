import { useState, useEffect } from "react";
import Header from "./componentes/Header";
import SearchBar from "./componentes/SearchBar";
import TaskList from "./componentes/TaskList";
import TaskForm from "./componentes/TaskForm";
import Footer from "./componentes/Footer";
import Filter from "./componentes/Filter";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState("");
      const [filter, setFilter] = useState("all");

        useEffect(() => {
            const storedTasks = localStorage.getItem("tasks");

                if (storedTasks) {
                      setTasks(JSON.parse(storedTasks));
                          }
                            }, []);

                              useEffect(() => {
                                  localStorage.setItem("tasks", JSON.stringify(tasks));
                                    }, [tasks]);

                                      return (

                                          <div className="container">

                                                <Header />

                                                      <TaskForm
                                                              tasks={tasks}
                                                                      setTasks={setTasks}
                                                                            />

                                                                                  <SearchBar
                                                                                          search={search}
                                                                                                  setSearch={setSearch}
                                                                                                        />

                                                                                                              <Filter
                                                                                                                      filter={filter}
                                                                                                                              setFilter={setFilter}
                                                                                                                                    />

                                                                                                                                          <TaskList
                                                                                                                                                  tasks={tasks}
                                                                                                                                                          search={search}
                                                                                                                                                                  filter={filter}
                                                                                                                                                                          setTasks={setTasks}
                                                                                                                                                                                />

                                                                                                                                                                                      <Footer />

                                                                                                                                                                                          </div>

                                                                                                                                                                                            );
                                                                                                                                                                                              }
                                                                                                                                                                                              export default App;