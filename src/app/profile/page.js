"use client";
import Header from "@/components/header/Header";
import styles from "@/app/page.module.css";
import ProfileStyle from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import ButtonAccent from "@/UI/Buttons/buttonAccent/ButtonAccent";
import { useEffect, useState } from "react";
import { setAuthUser, toggleAuth } from "../store/AuthSlice";
import { useRouter } from "next/navigation";
import ButtonGreen from "@/UI/Buttons/buttonGreen/ButtonGreen";

export default function Profile() {
  const dispatch = useDispatch();
  const AuthUser = useSelector((state) => state.Auth.AuthUser);
  const [seePassword, setSeePassword] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("signedUser")) {
      dispatch(setAuthUser(JSON.parse(localStorage.getItem("signedUser"))))
      dispatch(toggleAuth());
    }
  },[])

  return (
    <div className={styles.Layout} style={{ alignItems: "center" }}>
      <Header />
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={ProfileStyle.ProfileWindow}>
          <h2>Здравствуйте, {AuthUser.name}!</h2>
          <h2>Ваша почта : {AuthUser.email}</h2>
          <h2>
            {seePassword ? (
              <ButtonGreen
                onClick={() => {
                  setSeePassword(!seePassword);
                }}
              >
                Скрыть
              </ButtonGreen>
            ) : (
              <ButtonAccent
                onClick={() => {
                  setSeePassword(!seePassword);
                }}
              >
                Показать
              </ButtonAccent>
            )}
            Ваш пароль :{" "}
            {seePassword
              ? AuthUser.password
              : AuthUser.password.replace(/\w/g, "*").replace(/\W/g, "*")}
          </h2>
          <ButtonAccent
            onClick={() => {
              dispatch(toggleAuth());
              dispatch(
                setAuthUser({ name: "", email: "", password: "", cart: [] })
              );
              router.push("/");
            }}
          >
            Выйти из аккаунта
          </ButtonAccent>
        </div>
      </div>
    </div>
  );
}
