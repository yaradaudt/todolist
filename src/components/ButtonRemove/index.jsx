import styles from "./ButtonRemove.module.css";
import { TbTrash } from "react-icons/tb";

export function ButtonRemove() {
  return (
    <button className={styles.button}>
      <TbTrash />
    </button>
  );
}
