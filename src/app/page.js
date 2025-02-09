"use client";
import Header from "@/components/header/Header";
import styles from "./page.module.css";
import Main from "@/components/main/Main";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleAuth } from "./store/AuthSlice";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("signedUser")) {
      dispatch(toggleAuth());
    }
  }, []);
  return (
    <div className={styles.Layout}>
      <Header />
      <Main />
    </div>
  );
}
