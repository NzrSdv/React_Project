'use client';
import styles from "./ButtonGreen.module.css";
export default function ButtonGreen({children,...props }) {
  return <button {...props} className={styles.ButtonGreen}>{children}</button>;
}
