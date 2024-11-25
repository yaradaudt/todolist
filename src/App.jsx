import { Header } from "./components/Header";
import { InputForm } from "./components/InputForm";
import { TaskCard } from "./components/TaskCard";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <InputForm />
        <TaskCard />
      </div>
    </>
  );
}
