import styles from "./InputForm.module.css";
import { ButtonCreate } from "../ButtonCreate";

export function InputForm() {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <ButtonCreate />
    </form>
  );
}
