import styles from "./App.module.scss";

export default function App({ title }) {
  return <div className={styles.title}>{title}</div>;
}
