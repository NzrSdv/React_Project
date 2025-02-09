"use client";
import Header from "@/components/header/Header";
import styles from "@/app/page.module.css";
import ProfileStyle from "./Profile.module.css";
import { useSelector } from "react-redux";

export default function Profile() {
  const AuthUser = useSelector((state) => state.Auth.AuthUser);
  console.log(AuthUser);
  console.log(AuthUser.name);
  return (
    <div className={styles.Layout}>
      <Header />
      <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"center"
      }}>
        <div className={ProfileStyle.ProfileWindow}>
          <h2>Hello {AuthUser.name}</h2>
          <h2>Your email : {AuthUser.email}</h2>
          <h2> Your password : {AuthUser.password}</h2>
        </div>
      </div>
    </div>
  );
}
