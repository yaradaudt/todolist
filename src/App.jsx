import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { InputForm } from "./components/InputForm";
import { TaskCard } from "./components/TaskCard";
import clipBoard from "./assets/clipboard.svg";

import "./global.css";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTask(event) {
    event.preventDefault();

    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false,
    };

    setTasks([newTask, ...tasks]);
    setInputValue("");
  }

  function toggleTaskCompletion(taskId) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      );
      console.log("Updated tasks:", updatedTasks);
      return updatedTasks;
    });
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <InputForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleAddTask={handleAddTask}
        />
        <div className={styles.tasksArea}>
          <div className={styles.headerTasks}>
            <p className={styles.currentTasks}>
              Tarefas criadas 
            <span className={styles.badge}>
              {tasks.length}
            </span>
            </p>
            <p className={styles.completedTasks}>
              Concluídas
              <span className={styles.badge}>
                {completedTasks} de {tasks.length}
              </span>
            </p>
          </div>
          <div className={styles.tasksList}>
            {tasks.length === 0 ? (
              <span className={styles.clipboard}>
                <img src={clipBoard} alt="Clipboard" />
                <span className={styles.tasksNotes}>
                  <h3>Você ainda não tem tarefas cadastradas</h3>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </span>
              </span>
            ) : (
              tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  toggleTaskCompletion={toggleTaskCompletion}
                  deleteTask={deleteTask}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
