"use client";
import ButtonAccent from "@/UI/Buttons/buttonAccent/ButtonAccent";
import styles from "./SignForm.module.css";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuth, setAuthUser } from "@/app/store/AuthSlice";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function SignForm() {
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const AuthUser = useSelector((state) => state.Auth.AuthUser);

  const dispatch = useDispatch();

  const router = useRouter();

  function SignUp() {
    const newUser = { name: name, email: email, password: password };
    dispatch(setAuthUser(newUser));
    localStorage.setItem("signedUser", newUser);
    dispatch(toggleAuth());
    router.push("/");
  }
  function SignIn(){
    
  }

  const Page = usePathname();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.SignForm}>
      {Page === "/signIn" && (
        <>
          <h2 className="title">Вход</h2>
          <input
            className={styles.Input}
            type="email"
            placeholder="почта..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className={styles.Input}
            type="password"
            placeholder="пароль..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <ButtonAccent onClick={() => {}}>Войти</ButtonAccent>
          <p>
            Нет аккаунт? <Link href="/signUp">Зарегистрироватся</Link>
          </p>
        </>
      )}
      {Page === "/signUp" && (
        <>
          <h2 className="title">Регистрация</h2>
          <input
            className={styles.Input}
            type="text"
            placeholder="имя..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className={styles.Input}
            type="email"
            placeholder="почта..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className={styles.Input}
            type="password"
            placeholder="пароль..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <ButtonAccent
            onClick={() => {
              SignUp();
            }}
          >
            Регистрация
          </ButtonAccent>
          <p>
            Уже есть аккаунт? <Link href="/signIn">Войти</Link>
          </p>
        </>
      )}
    </div>
  );
}
