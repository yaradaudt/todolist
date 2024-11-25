import styles from "./TaskCard.module.css";
import { TbTrash } from "react-icons/tb";

export function TaskCard() {
  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <input className={styles.inputCheckbox} type="checkbox" />
        <span className={styles.checkboxSpan}></span>
      </div>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button className={styles.buttonRemove}>
        <TbTrash />
      </button>
    </div>
  );
}
