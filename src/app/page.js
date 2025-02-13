"use client";
import Header from "@/components/header/Header";
import styles from "./page.module.css";
import Main from "@/components/main/Main";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, toggleAuth } from "./store/AuthSlice";
export default function Home() {
  // const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.Auth.isAuth);
  console.log(isAuth);
  // if (localStorage.getItem("signedUser")) {
  //   dispatch(setAuthUser(JSON.parse(localStorage.getItem("signedUser"))))
  //   dispatch(toggleAuth());
  // }
  return (
    <div className={styles.Layout}>
      <Header />
      <Main />
    </div>
  );
}
