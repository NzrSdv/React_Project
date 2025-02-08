import Header from "@/components/header/Header";
import styles from "./page.module.css";
import Main from "@/components/main/Main";
export default function Home() {
  return (
    <div className={styles.Layout}>
      <Header/>
      <Main/>
    </div>
  );
}
