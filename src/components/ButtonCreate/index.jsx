import styles from "./ButtonCreate.module.css";
import { FiPlusCircle } from "react-icons/fi";

export function ButtonCreate() {
  return (
    <button className={styles.button}>
      Criar <FiPlusCircle />
    </button>
  );
}
