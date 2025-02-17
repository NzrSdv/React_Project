"use client";
import ButtonAccent from "@/UI/Buttons/buttonAccent/ButtonAccent";
import Link from "next/link";
import styles from "./SignForm.module.css";

import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuth, setAuthUser } from "@/app/store/AuthSlice";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { addUser } from "@/app/store/UserSlice";
import { addCartProduct } from "@/app/store/CartSlice";
export default function SignForm() {
  const AuthUser = useSelector((state) => state.Auth.AuthUser);
  const Users = useSelector((state) => state.User.Users);

  const dispatch = useDispatch();

  const router = useRouter();
  useEffect(() => {
    if(localStorage.getItem("allUsers")){
      JSON.parse(localStorage.getItem("allUsers")).forEach((user) => {
        dispatch(addUser(user))
      })
    }
  },[])

  function SignUp() {
    const newUser = {id:Users.length, name: name, email: email, password: password, cart: [] };
    dispatch(setAuthUser(newUser));
    localStorage.setItem("signedUser", JSON.stringify(newUser));
    dispatch(toggleAuth());
    dispatch(setAuthUser(newUser));
    dispatch(addUser(newUser));
    localStorage.setItem("allUsers",JSON.stringify(Users))
    router.push("/");
  }
  function SignIn() {
    Users.forEach((user) => {
      if (user.email == email && user.password == password) {
        dispatch(toggleAuth());
        dispatch(setAuthUser(user));
        user.cart.forEach((product) => {
          dispatch(addCartProduct(product));
        });
        router.push("/");
      }
    });
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
          <ButtonAccent
            onClick={() => {
              SignIn();
            }}
          >
            Войти
          </ButtonAccent>
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
