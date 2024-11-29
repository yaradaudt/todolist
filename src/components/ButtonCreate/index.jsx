import styles from "./ButtonCreate.module.css";
import { FiPlusCircle } from "react-icons/fi";

export function ButtonCreate({ onClick }) {
  return (
    <button 
    className={styles.button} 
    type="button" 
    onClick={onClick}>
      Criar <FiPlusCircle />
    </button>
  );
}
