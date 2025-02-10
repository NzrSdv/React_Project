"use client";
import Header from "@/components/header/Header";
import styles from "./page.module.css";
import Main from "@/components/main/Main";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, toggleAuth } from "./store/AuthSlice";
export default function Home() {
  
  const isAuth = useSelector(state => state.Auth.isAuth)
  console.log(isAuth);
  return (
    <div className={styles.Layout}>
      <Header />
      <Main />
    </div>
  );
}
