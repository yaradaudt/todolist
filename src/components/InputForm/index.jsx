import styles from "./InputForm.module.css";
import { ButtonCreate } from "../ButtonCreate";

export function InputForm({ inputValue, setInputValue, handleAddTask }) {
  return (
    <form className={styles.form} onSubmit={handleAddTask}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ButtonCreate onClick={handleAddTask} />
    </form>
  );
}
