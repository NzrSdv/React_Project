import styles from "./ButtonAccent.module.css";
export default function ButtonAccent({children,...props }) {
  return <button {...props} className={styles.ButtonAccent}>{children}</button>;
}
