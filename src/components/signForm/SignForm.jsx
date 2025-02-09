"use client";
import ButtonAccent from "@/UI/Buttons/buttonAccent/ButtonAccent";
import styles from "./SignForm.module.css";
import { usePathname } from "next/navigation";
export default function SignForm() {
  const Page = usePathname();
  return (
    <div className={styles.SignForm}>
      {Page === "/signIn" && (
        <>
          <h2 className="title">Вход</h2>
          <input className={styles.Input} type="email" placeholder="почта..." />
          <input
            className={styles.Input}
            type="password"
            placeholder="пароль..."
          />
          <ButtonAccent>Войти</ButtonAccent>
        </>
      )}
      {Page === "/signUp" && <>
        <h2 className="title">Регистрация</h2>
        <input className={styles.Input} type="text" placeholder="имя..." />
          <input className={styles.Input} type="email" placeholder="почта..." />
          <input
            className={styles.Input}
            type="password"
            placeholder="пароль..."
          />
          <ButtonAccent>Регистрация</ButtonAccent></> }
    </div>
  );
}
