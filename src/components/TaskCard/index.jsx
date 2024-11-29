import styles from "./TaskCard.module.css";
import { TbTrash } from "react-icons/tb";

export function TaskCard({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <div className={styles.taskCard}>
      <div className={styles.checkbox}>
        <input
          className={styles.inputCheckbox}
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => {
            console.log("Checkbox clicked:", task.id)
            toggleTaskCompletion(task.id)
          }}
          />
        <span
          className={`${styles.checkboxSpan}
        ${task.isCompleted ? styles.checked : ""}`}
        ></span>
      </div>
      <p
        className={`${styles.taskText} ${
          task.isCompleted ? styles.taskTextCompleted : ""
        }`}
      >
        {task.text}
      </p>

      <button
        className={styles.buttonRemove}
        onClick={() => deleteTask(task.id)}
      >
        <TbTrash />
      </button>
    </div>
  );
}
